/**
 * JSON 剧本加载器
 * 支持从 JSON 文件加载剧情数据
 */

// 当前加载的剧本数据
let loadedScript = null

// 从 JSON 文件加载剧本
export async function loadScriptFromJSON(url) {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Failed to load script: ${response.status}`)
    }
    loadedScript = await response.json()
    console.log(`剧本加载成功：${loadedScript.meta?.title || '未知'}`)
    return loadedScript
  } catch (error) {
    console.error('剧本加载失败:', error)
    return null
  }
}

// 从多个 JSON 文件加载（分章节）
export async function loadScriptFromJSONs(urls) {
  const results = await Promise.all(
    urls.map(url => fetch(url).then(r => r.json()).catch(e => null))
  )
  
  // 合并所有章节
  const merged = {
    meta: results[0]?.meta || {},
    worlds: results.flatMap(r => r?.worlds || []),
    scenes: results.flatMap(r => r?.scenes || []),
    endings: results.flatMap(r => r?.endings || [])
  }
  
  loadedScript = merged
  console.log(`剧本加载成功：${merged.scenes.length} 个场景`)
  return merged
}

// 获取世界信息
export function getWorld(worldId) {
  if (!loadedScript) return null
  return loadedScript.worlds?.find(w => w.id === worldId)
}

// 获取场景
export function getScene(sceneId) {
  if (!loadedScript) return null
  return loadedScript.scenes?.find(s => s.id === sceneId)
}

// 获取结局
export function getEnding(endingId) {
  if (!loadedScript) return null
  return loadedScript.endings?.find(e => e.id === endingId)
}

// 获取所有世界
export function getWorlds() {
  return loadedScript?.worlds || []
}

// 获取所有结局
export function getEndings() {
  return loadedScript?.endings || []
}

// 根据世界 ID 获取场景列表
export function getScenesByWorld(worldId) {
  if (!loadedScript) return []
  return loadedScript.scenes?.filter(s => s.worldId === worldId) || []
}

// 获取场景的选择支
export function getSceneChoices(sceneId) {
  const scene = getScene(sceneId)
  if (!scene) return []
  return scene.choices || []
}

// 检查场景是否有动态对话
export function hasDialogueVariants(scene) {
  return scene?.dialogueVariants && scene.dialogueVariants.length > 0
}

// 获取动态对话（根据属性）
export function getDynamicDialogue(scene, playerState) {
  if (!scene) return ''
  
  let dialogue = scene.dialogue
  
  // 检查对话变体
  if (scene.dialogueVariants) {
    for (const variant of scene.dialogueVariants) {
      if (variant.conditions) {
        const met = checkConditions(variant.conditions, playerState)
        if (met) {
          dialogue = variant.text
          break
        }
      }
    }
  }
  
  // 添加额外对话行
  if (scene.extraLines) {
    const extraLines = []
    
    if (playerState.stats.courage >= 70 && scene.extraLines.courage) {
      extraLines.push(scene.extraLines.courage)
    }
    if (playerState.stats.wisdom >= 70 && scene.extraLines.wisdom) {
      extraLines.push(scene.extraLines.wisdom)
    }
    if (playerState.stats.compassion >= 70 && scene.extraLines.compassion) {
      extraLines.push(scene.extraLines.compassion)
    }
    if (playerState.stats.determination >= 70 && scene.extraLines.determination) {
      extraLines.push(scene.extraLines.determination)
    }
    if (playerState.hiddenStats.corruption >= 50 && scene.extraLines.corruption) {
      extraLines.push(scene.extraLines.corruption)
    }
    
    const worldId = scene.worldId
    if (worldId && playerState.bonds[worldId] >= 50 && scene.extraLines.bond) {
      const world = getWorld(worldId)
      extraLines.push(scene.extraLines.bond.replace('{world}', world?.name || '这个世界'))
    }
    
    if (extraLines.length > 0) {
      dialogue += '\n\n' + extraLines.join('\n')
    }
  }
  
  return dialogue
}

// 检查条件（支持嵌套）
export function checkConditions(conditions, playerState) {
  if (!conditions || !playerState) return true
  
  // 检查基础属性
  if (conditions.stats) {
    for (const [key, req] of Object.entries(conditions.stats)) {
      const val = playerState.stats?.[key] ?? 0
      if (req.min !== undefined && val < req.min) return false
      if (req.max !== undefined && val > req.max) return false
    }
  }
  
  // 检查隐藏属性
  if (conditions.hiddenStats) {
    for (const [key, req] of Object.entries(conditions.hiddenStats)) {
      const val = playerState.hiddenStats?.[key] ?? 0
      if (req.min !== undefined && val < req.min) return false
      if (req.max !== undefined && val > req.max) return false
    }
  }
  
  // 检查羁绊
  if (conditions.bonds) {
    for (const [key, req] of Object.entries(conditions.bonds)) {
      const val = playerState.bonds?.[key] ?? 0
      if (req.min !== undefined && val < req.min) return false
    }
  }
  
  return true
}

// 应用选择支效果
export function applyChoiceEffects(choice, playerState) {
  if (!choice?.effects || !playerState) return []
  
  const changes = []
  const effects = choice.effects
  
  // 应用基础属性
  if (effects.stats) {
    for (const [key, value] of Object.entries(effects.stats)) {
      if (playerState.stats.hasOwnProperty(key)) {
        const oldVal = playerState.stats[key]
        playerState.stats[key] = Math.max(0, Math.min(100, oldVal + value))
        const newVal = playerState.stats[key]
        if (value !== 0) {
          changes.push({ stat: key, delta: value, from: oldVal, to: newVal })
        }
      }
    }
  }
  
  // 应用隐藏属性
  if (effects.hiddenStats) {
    for (const [key, value] of Object.entries(effects.hiddenStats)) {
      if (playerState.hiddenStats.hasOwnProperty(key)) {
        const oldVal = playerState.hiddenStats[key]
        playerState.hiddenStats[key] = Math.max(0, Math.min(100, oldVal + value))
        const newVal = playerState.hiddenStats[key]
        if (value !== 0) {
          changes.push({ stat: key, delta: value, from: oldVal, to: newVal, hidden: true })
        }
      }
    }
  }
  
  // 应用羁绊
  if (effects.bonds) {
    for (const [key, value] of Object.entries(effects.bonds)) {
      if (playerState.bonds.hasOwnProperty(key)) {
        const oldVal = playerState.bonds[key]
        playerState.bonds[key] = Math.max(0, Math.min(100, oldVal + value))
        const newVal = playerState.bonds[key]
        if (value !== 0) {
          changes.push({ stat: `bond_${key}`, delta: value, from: oldVal, to: newVal })
        }
      }
    }
  }
  
  return changes
}

// 检查选择支是否可用
export function isChoiceAvailable(choice, playerState) {
  if (!choice?.conditions) return true
  return checkConditions(choice.conditions, playerState)
}

// 获取选择支不可用的原因
export function getChoiceFailedReason(choice, playerState) {
  if (!choice?.conditions) return ''
  
  const failed = []
  
  if (choice.conditions.stats) {
    for (const [key, req] of Object.entries(choice.conditions.stats)) {
      const val = playerState.stats?.[key] ?? 0
      if (req.min !== undefined && val < req.min) {
        failed.push(`${getStatName(key)}≥${req.min}`)
      }
    }
  }
  
  if (choice.conditions.hiddenStats) {
    for (const [key, req] of Object.entries(choice.conditions.hiddenStats)) {
      const val = playerState.hiddenStats?.[key] ?? 0
      if (req.min !== undefined && val < req.min) {
        failed.push(`${getStatName(key)}≥${req.min}`)
      }
    }
  }
  
  return failed.join(', ')
}

// 属性名称映射
function getStatName(stat) {
  const names = {
    courage: '勇气',
    wisdom: '智慧',
    compassion: '同情',
    determination: '决心',
    corruption: '腐化',
    chaos: '混乱'
  }
  return names[stat] || stat
}

// 导出当前加载的剧本
export function getLoadedScript() {
  return loadedScript
}

// 清空剧本
export function unloadScript() {
  loadedScript = null
}
