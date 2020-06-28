export const API_LS = {
  getAllCandidates: () => {
    const candidates = JSON.parse(localStorage.getItem('candidates'))
    return (!candidates) ? [] : candidates
  },
  getCandidate: function (id) {
    const candidates = this.getAllCandidates()
    const candidate = candidates.filter(id => candidates.id)
    return (candidate) ? candidate : { message: 'There is not candidates, enjoy and please create a new!' }
  },
  setAllCandidates: (candidates = []) => {
    localStorage.setItem('candidates', JSON.stringify(candidates))
  },
  setCandidate: function (newCandidate) { // Set only one candidate : TODO 🚧
    let candidates = this.getAllCandidates()
    if (candidates.length) {
      // check if this candidate already exists
      if (candidates.find(candidate => candidate.github_username == newCandidate.github_username)) {
        const data = { message: 'This Candidate already exists' }
        console.error(data.message)
        return data
      }
      this.setAllCandidates([
        ...candidates,
        newCandidate
      ])
    } else {
      this.setAllCandidates([
        ...candidates,
        newCandidate
      ])
    }
  },
  updateCandidate: (_id) => { // TODO 🚧 : updateCandidate
    // Get candidates
    // Filter
    // Updates candidate
    // Save new list at localstorage
  },
  deleteCandidate: (_id) => { // TODO 🚧 : deleteCandidate
    // Filter
    // Get candidates
    // delete candidate
    // Save new list at localstorage
  }
}
