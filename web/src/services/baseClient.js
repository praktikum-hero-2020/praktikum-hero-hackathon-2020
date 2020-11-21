class BaseClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.headers = {
      'Content-Type': 'application/json',
    };
  }

  getPetBirthdays = () => {
    return fetch(`${this.baseURL}/hb/`, {
      headers: this.headers,
    })
      .then(res => console.log(res.json()))
      .catch(err => console.log(err));
  };
}

const baseClient = new BaseClient('http://6ac1c6b0eeec.ngrok.io/api');
export default baseClient;
