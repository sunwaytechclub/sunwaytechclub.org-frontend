<script>
    let email = "";
    let password = "";
    let isLoading = false;
    let isSuccess = false;
    export let submit;
    let errors = {};
    const handleSubmit = () => {
      errors = {};
      if (email.length === 0) {
        errors.email = "Field should not be empty";
      }
      if (password.length === 0) {
        errors.password = "Field should not be empty";
      }
      if (Object.keys(errors).length === 0) {
        isLoading = true;
        submit({ email, password })
          .then(() => {
            isSuccess = true;
            isLoading = false;
          })
          .catch(err => {
            errors.server = err;
            isLoading = false;
          });
      }
    };
  </script>
  
  <style>
    form {
      background: #fff;
    }
    label {
      margin: 10px 0;
    }
    input {
      border: none;
    }
    input:focus {
      outline: 0;
    }
    button {
      margin-top: 20px;
      
    }
    button:hover {
      transform: translateY(-2.5px);
      box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.58);
    }
    h1 {
      margin: 10px 20px 30px 20px;
      font-size: 40px;
    }
    .errors {
      list-style-type: none;
      
    }
    .success {
      font-size: 24px;
      text-align: center;
    }
  </style>
  
  <form>
      
  </form>
