class userAPI {

  static async getUserbyEmail(user) {
    const headers = {'Content-Type': 'application/json'};
    const myInit = {
      method: "GET",
      headers
    };

    const request = new Request(`http://localhost:3001/users/byEmail/${user.email}`, myInit); 

    return fetch(request, myInit)
      .then( async res => {
        const resObject = await res.json();
        const user = {
          email: resObject.email, 
          name: resObject.name,
          password: resObject.password,
          active: resObject.active
        };
        return user;
      })
      .catch((err) => {
        return err;
      });
  };

  static async getUserbyName(user) {
    const headers = {'Content-Type': 'application/json'};
    const myInit = {
      method: "GET",
      headers
    };

    const request = new Request(`http://localhost:3001/users/byName/${user.name}`, myInit); 

    return fetch(request, myInit)
      .then( async res => {
        const resObject = await res.json();
        const user = {
          email: resObject.email, 
          name: resObject.name,
          password: resObject.password,
          active: resObject.active
        };
        return user;
      })
      .catch((err) => {
        return err;
      });
  };

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
