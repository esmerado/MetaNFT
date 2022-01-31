import axios from "axios";

export class UserService {
  apiRoot = "https://api.unsplash.com";
  accessKey = process.env.REACT_APP_ACCESSKEY;

  apiMonkeyRoot = "https://api.thegraph.com/subgraphs/id/QmaQReZYZ7J6ergVLhmZFTrd7AenV46aJ8c2Y6ohdJ3Dbp"

  async getRandom() {
    return axios
      .get(`${this.apiRoot}/photos/random?client_id=${this.accessKey}&count=20`)
      .then((res) => res.data);
  }

  async getBySearch(values) {
    console.log('values', values);
    return axios
      .get(`${this.apiRoot}/search/photos?client_id=${this.accessKey}&per_page=20&query=${values.search}`)
      .then((res) => res.data);
  }
}
