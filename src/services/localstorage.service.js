export const API_LS = {
  getAllCandidates: () => {
    const candidates = JSON.parse(localStorage.getItem('candidates'))
    return (!candidates) ? [] : candidates
  },
  getCandidate: (id) => {
    const candidates = this.getAllCandidates()
    const candidate = candidates.filter(id => candidates.id)
    return (candidate) ? candidate : { message: 'There is not candidates, enjoy and please create a new!' }
  },
  setAllCandidates: (candidates = []) => {
    return JSON.stringify(
      localStorage.setItem('candidates', candidates)
    )
  },
  setCandidate: (_id) => { // Set only one candidate : TODO 🚧
    // Get candidates
    // Filter
    // Updates candidate
    // Save new list at localstorage
  }
}
