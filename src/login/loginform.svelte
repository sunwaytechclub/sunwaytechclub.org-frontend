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
      
  </style>
  
  <form>

  </form>
