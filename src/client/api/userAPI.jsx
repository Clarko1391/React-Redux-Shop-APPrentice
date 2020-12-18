class userAPI {
  static requestHeaders() {
    // Not sure what to change this to yet  --> 'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`,
    return { AUTHORIZATION: `Bearer ${sessionStorage.jwt}` };
  }

  static getUserbyId(user) {
    const headers = this.requestHeaders();
    const request = new Request(`http://localhost:3001/users/${user.id}`, {
      method: "GET",
      headers: headers,
    });

    return fetch(request)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return err;
      });
  }

  static updateUserbyId(user) {
    const headers = Object.assign(
      { "Content-Type": "application/json" },
      this.requestHeaders()
    );
    const request = new Request(`http://localhost:3001/users/${user.id}`, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify({ user: user }),
    });

    return fetch(request)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return err;
      });
  }

  static async createUser(user) {
    const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
    const request = new Request(`http://localhost:3001/users`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ user: user }),
    });

    return fetch(request)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return err;
      });
  }

  static deleteUserbyId(user) {
    const headers = Object.assign(
      { "Content-Type": "application/json" },
      this.requestHeaders()
    );
    const request = new Request(`http://localhost:3001/users/${user.id}`, {
      method: "DELETE",
      headers: headers,
    });

    return fetch(request)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return err;
      });
  }
}

export default userAPI;
