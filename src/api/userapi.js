import axios from 'axios'

const userapi = async () => {
    const api = "https://script.google.com/macros/s/AKfycbzbnmX8E-pMtOVwCHxlZPnMEPlvscWd7O7YehWZTUoqp1odcnLxArxPzj63zfWq1-3_/exec"
     return await axios.get(api)
     .then( 
      (res) => res.data
    )
}

export default userapi