class BaseClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.headers = {
      'Content-Type': 'application/json',
    };
  }

  getCategories = () => {
    return fetch(`${this.baseURL}/category/`, {
      headers: this.headers,
    })
      .then(res => res.json())
      .catch(err => console.log(err));
  };

  getPetBirthdays = () => {
    return fetch(`${this.baseURL}/hb/`, {
      headers: this.headers,
    })
      .then(res => res.json())
      .catch(err => console.log(err));
  };

  getPopularPets = () => {
    return fetch(`${this.baseURL}/popular/`, {
      headers: this.headers,
    })
      .then(res => res.json())
      .catch(err => console.log(err));
  };

  getPetCard = id => {
    return fetch(`${this.baseURL}/pet/`, {
      headers: this.headers,
      method: 'POST',
      body: JSON.stringify({
        pet_id: id,
      }),
    })
      .then(res => res.json())
      .catch(err => console.log(err));
  };
}

const baseClient = new BaseClient('http://84.201.146.73/api');
export default baseClient;
