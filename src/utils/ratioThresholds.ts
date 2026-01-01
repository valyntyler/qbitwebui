const DEFAULT_THRESHOLD = 1.0

export function loadRatioThreshold(): number {
	const stored = localStorage.getItem('ratioThreshold')
	if (stored) {
		const parsed = parseFloat(stored)
		if (!isNaN(parsed) && parsed >= 0) return parsed
	}
	return DEFAULT_THRESHOLD
}

export function saveRatioThreshold(threshold: number): void {
	localStorage.setItem('ratioThreshold', threshold.toString())
}
