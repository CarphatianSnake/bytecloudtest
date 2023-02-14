const data = {
  backblaze: {
    min: 7,
    storage: 0.005,
    transfer: 0.01
  },
  bunny: {
    max: 10,
    storage: {
      hdd: 0.01,
      ssd: 0.02
    },
    transfer: 0.01
  },
  scaleway: {
    storage: {
      multi: 0.06,
      single: 0.03
    },
    transfer: 0.02,
    free: {
      storage: {
        multi: 75,
        single: 75
      },
      transfer: 75
    }
  },
  vultr: {
    min: 5,
    storage: 0.01,
    transfer: 0.01
  }
}

export default data;