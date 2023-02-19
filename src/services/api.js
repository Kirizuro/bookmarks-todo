import axios from 'axios'

class Api {
  constructor ({ config }) {
    this.config = config;

    (this.geoElements = {
      find: {
        bbox: async (bbox, parameters) =>
          this.call(`/itinerary/bbox/${bbox.join(',')}`, { parameters })
      }
    }),
    (this.user = {
      register: async (data) =>
        this.call('/user/create', { method: 'post', data }),
      login: async (data) =>
        this.call('/user/token/create', { method: 'patch', data }),
      logout: async () => this.call('/user/logout', { method: 'post' }),
      read: async (id, parameters) =>
        this.call(`/user/${id}`, { parameters }),
      update: async (id, data) =>
        this.call(`/user/${id}/update`, { method: 'patch', data }),
      remove: async (id) =>
        this.call(`/user/${id}/remove`, { method: 'delete' })
    })
  }

  async call (path, { method = 'get', data, parameters = {} } = {}) {
    const queryParameters = Object.keys(parameters)
      .map((key) => `${key}=${encodeURIComponent(parameters[key])}`)
      .join('&')
    const url = `${this.config.basePath}${path}/?${queryParameters}`
    const response = await axios.request(url, {
      method,
      data,
      withCredentials: true
    })

    return response.data
  }
}

export default Api
