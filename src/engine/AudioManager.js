/**
 * 音频管理器
 * 支持 Web Audio API 生成音效 + 外部 BGM/音效文件
 */

class AudioManager {
  constructor() {
    this.audioContext = null
    this.enabled = true
    this.volume = 0.5
    this.initialized = false
    
    // BGM 管理
    this.currentBGM = null
    this.bgmElement = null
    this.bgmVolume = 0.5
    
    // 音效缓存
    this.sfxCache = {}
  }

  // 初始化音频上下文
  init() {
    if (this.initialized) return
    try {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)()
      this.initialized = true
    } catch (e) {
      console.warn('Web Audio API 不支持')
      this.enabled = false
    }
  }

  // 播放点击音效
  playClick() {
    if (!this.enabled) return
    this.init()
    if (!this.audioContext) return

    const oscillator = this.audioContext.createOscillator()
    const gainNode = this.audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(this.audioContext.destination)

    oscillator.frequency.value = 800
    oscillator.type = 'sine'
    
    gainNode.gain.setValueAtTime(this.volume * 0.3, this.audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1)

    oscillator.start(this.audioContext.currentTime)
    oscillator.stop(this.audioContext.currentTime + 0.1)
  }

  // 播放选择音效
  playSelect() {
    if (!this.enabled) return
    this.init()
    if (!this.audioContext) return

    const oscillator = this.audioContext.createOscillator()
    const gainNode = this.audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(this.audioContext.destination)

    oscillator.frequency.value = 600
    oscillator.type = 'sine'
    
    gainNode.gain.setValueAtTime(this.volume * 0.4, this.audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.15)

    oscillator.start(this.audioContext.currentTime)
    oscillator.stop(this.audioContext.currentTime + 0.15)
  }

  // 播放过渡音效（穿越用）
  playTransition() {
    if (!this.enabled) return
    this.init()
    if (!this.audioContext) return

    const oscillator = this.audioContext.createOscillator()
    const gainNode = this.audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(this.audioContext.destination)

    oscillator.frequency.setValueAtTime(400, this.audioContext.currentTime)
    oscillator.frequency.exponentialRampToValueAtTime(1200, this.audioContext.currentTime + 1)
    oscillator.type = 'sine'
    
    gainNode.gain.setValueAtTime(this.volume * 0.5, this.audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 1)

    oscillator.start(this.audioContext.currentTime)
    oscillator.stop(this.audioContext.currentTime + 1)
  }

  // 播放警告音效
  playAlert() {
    if (!this.enabled) return
    this.init()
    if (!this.audioContext) return

    const oscillator = this.audioContext.createOscillator()
    const gainNode = this.audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(this.audioContext.destination)

    oscillator.frequency.value = 300
    oscillator.type = 'square'
    
    gainNode.gain.setValueAtTime(this.volume * 0.3, this.audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3)

    oscillator.start(this.audioContext.currentTime)
    oscillator.stop(this.audioContext.currentTime + 0.3)
  }

  // 播放结局音效
  playEnding() {
    if (!this.enabled) return
    this.init()
    if (!this.audioContext) return

    const notes = [523.25, 659.25, 783.99, 1046.50] // C E G C
    const now = this.audioContext.currentTime

    notes.forEach((freq, i) => {
      const oscillator = this.audioContext.createOscillator()
      const gainNode = this.audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(this.audioContext.destination)

      oscillator.frequency.value = freq
      oscillator.type = 'sine'
      
      const startTime = now + i * 0.3
      gainNode.gain.setValueAtTime(this.volume * 0.4, startTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + 0.8)

      oscillator.start(startTime)
      oscillator.stop(startTime + 0.8)
    })
  }

  // ========== BGM 管理 ==========
  
  // 播放 BGM
  playBGM(bgmConfig) {
    if (!this.enabled || !bgmConfig) return
    
    // 如果已经在播放同一首，跳过
    if (this.currentBGM === bgmConfig.id) return
    
    // 停止当前 BGM
    this.stopBGM()
    
    try {
      // 创建新的 audio 元素
      this.bgmElement = new Audio(bgmConfig.path)
      this.bgmElement.loop = bgmConfig.loop !== false
      this.bgmElement.volume = bgmConfig.volume || this.bgmVolume
      
      // 预加载
      this.bgmElement.load()
      
      // 播放
      const playPromise = this.bgmElement.play()
      if (playPromise) {
        playPromise.catch(e => {
          console.warn('BGM 播放失败:', e)
        })
      }
      
      this.currentBGM = bgmConfig.id
    } catch (e) {
      console.warn('BGM 加载失败:', e)
    }
  }
  
  // 停止 BGM
  stopBGM() {
    if (this.bgmElement) {
      this.bgmElement.pause()
      this.bgmElement.currentTime = 0
      this.bgmElement = null
    }
    this.currentBGM = null
  }
  
  // 暂停 BGM
  pauseBGM() {
    if (this.bgmElement) {
      this.bgmElement.pause()
    }
  }
  
  // 恢复 BGM
  resumeBGM() {
    if (this.bgmElement) {
      this.bgmElement.play().catch(e => console.warn(e))
    }
  }
  
  // 设置 BGM 音量
  setBGMVolume(vol) {
    this.bgmVolume = Math.max(0, Math.min(1, vol))
    if (this.bgmElement) {
      this.bgmElement.volume = this.bgmVolume
    }
  }
  
  // 淡入 BGM
  fadeInBGM(bgmConfig, duration = 2000) {
    if (!this.enabled || !bgmConfig) return
    
    this.stopBGM()
    
    try {
      this.bgmElement = new Audio(bgmConfig.path)
      this.bgmElement.loop = bgmConfig.loop !== false
      this.bgmElement.volume = 0
      
      const playPromise = this.bgmElement.play()
      if (playPromise) {
        playPromise.then(() => {
          // 淡入
          const startTime = Date.now()
          const fadeInterval = setInterval(() => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            this.bgmElement.volume = this.bgmVolume * progress
            
            if (progress >= 1) {
              clearInterval(fadeInterval)
            }
          }, 50)
        }).catch(e => console.warn(e))
      }
      
      this.currentBGM = bgmConfig.id
    } catch (e) {
      console.warn(e)
    }
  }
  
  // 淡出 BGM
  fadeOutBGM(duration = 1000) {
    if (!this.bgmElement) return
    
    const startTime = Date.now()
    const startVolume = this.bgmElement.volume
    const fadeInterval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      this.bgmElement.volume = startVolume * (1 - progress)
      
      if (progress >= 1) {
        clearInterval(fadeInterval)
        this.stopBGM()
      }
    }, 50)
  }
  
  // ========== 外部音效 ==========
  
  // 预加载音效
  preloadSFX(sfxConfig) {
    if (!sfxConfig || !sfxConfig.path) return
    
    if (!this.sfxCache[sfxConfig.id]) {
      const audio = new Audio(sfxConfig.path)
      audio.load()
      this.sfxCache[sfxConfig.id] = audio
    }
  }
  
  // 播放外部音效
  playSFX(sfxConfig) {
    if (!this.enabled || !sfxConfig) return
    
    try {
      // 从缓存获取或创建新实例
      let audio = this.sfxCache[sfxConfig.id]
      if (!audio) {
        audio = new Audio(sfxConfig.path)
        audio.load()
        this.sfxCache[sfxConfig.id] = audio
      }
      
      // 克隆以支持重叠播放
      const clone = audio.cloneNode()
      clone.volume = sfxConfig.volume || this.volume
      clone.play().catch(e => console.warn(e))
    } catch (e) {
      console.warn('音效播放失败:', e)
    }
  }
  
  // 设置音量
  setVolume(vol) {
    this.volume = Math.max(0, Math.min(1, vol))
  }

  // 启用/禁用音频
  setEnabled(enabled) {
    this.enabled = enabled
    if (!enabled) {
      this.stopBGM()
    }
  }
}

// 导出单例
export const audioManager = new AudioManager()
