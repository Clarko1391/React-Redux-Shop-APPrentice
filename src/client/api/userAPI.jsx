class userAPI {
  static requestHeaders() {
    // Not sure what to change this to yet  --> 'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`,
    return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`};
  }

  static getUserbyId(user) {
    const headers = this.requestHeaders();
    const request = new Request(`http://localhost:3001/users/${user.id}`, {
      method: "GET",
      headers: headers,
    });

    // get user by id will act as login function... get full user object based on usernme from DB and return to react where you can check if username and password match with returned values

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
    const headers = {'Content-Type': 'application/json'};
    const body = JSON.stringify({ ...user });
    const myInit = {
      method: "POST",
      headers,
      body
    };
    const request = new Request('http://localhost:3001/users', myInit); 

    return fetch(request, myInit)
      .then( async (res) => {
        const resObject = await res.json();
        const user = {
          email: resObject.email, 
          name: resObject.name,
          active: resObject.active
        };
        return user;
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
