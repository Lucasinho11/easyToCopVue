import axios from 'axios'

export const login = ({ commit,state }, form) => {
    axios.post(
        'http://127.0.0.1:8000/api/auth/login',
        {
            email: form.email,
            password: form.password,
            device_name: "vue"
          }
        ).then((response) => {
            console.log(response);

            commit('token', response.data.token)
            
            const user = {
                name: response.data.name,
                email: response.data.email,
                created_at: response.data.created_at
            }

            commit('data', user)
            state.msg.success = 'Vous etes connecté'
            

       }).catch((error) => {
        state.msg.error = error
        console.log(error)
       }); 
}

export const register = ({ commit, state }, form) => {
   axios.post(
    'http://127.0.0.1:8000/api/auth/register',
    {
        name: form.name,
        email: form.email,
        password: form.password,
        device_name: "vue"
      }
    ).then((response) => {
        console.log(response);
        commit('token', response.data.token)
            
            const user = {
                name: response.data.name,
                email: response.data.email,
                created_at: response.data.created_at
            }

            commit('data', user)
            state.msg.success = 'Compte enregsitré'
           // window.location.href="/login"
   }).catch((error) => {
    state.msg.error = error
    console.log(error)
   }); 
}

export const logout = ({ commit, state }) => {
 const token = state.user.token;
                if (!token) {
                    return;
                }

                axios.post(
                'http://127.0.0.1:8000/api/auth/logout', {}, {
                    headers: {
                    'Authorization': `Bearer ${token}` 
                }
                }).then((response) => {
                    console.log(response);
                    state.msg.success = 'Vous etes déconnecté'
               }).catch((error) => {
                console.log(error)
               }); 
               commit('token', null);
    commit('data', {});
    window.location.href="/"
}
export const allDrops = ({commit}) => {
    axios.get('https://easy2cop.herokuapp.com/api/drops')
            .then((response) => {
                console.log(response.data[0])
            const drops = response.data[0]
            commit('drops', drops)
            return drops
        }).catch(() => {
        });
}
export const allActus = ({commit}) => {
    axios.get('https://easy2cop.herokuapp.com/api/actus')
            .then((response) => {
                console.log(response.data[0])
            const actus = response.data[0]
            commit('actus', actus)
            return actus
        }).catch(() => {
        });
}