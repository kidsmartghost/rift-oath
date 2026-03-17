/**
 * 简易音频管理器
 * 使用 Web Audio API 生成音效，无需外部文件
 */

class AudioManager {
  constructor() {
    this.audioContext = null
    this.enabled = true
    this.volume = 0.5
    this.initialized = false
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

  // 设置音量
  setVolume(vol) {
    this.volume = Math.max(0, Math.min(1, vol))
  }

  // 启用/禁用音频
  setEnabled(enabled) {
    this.enabled = enabled
  }
}

// 导出单例
export const audioManager = new AudioManager()
