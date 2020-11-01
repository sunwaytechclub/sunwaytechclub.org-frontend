<button bind:this={signinCta} {disabled} class="google-auth">
    <img src=""alt="Google" />
    <span>{text}</span>
  </button>
  
  <style>
    
    button.google-auth {
        position: absolute;
        width: 368px;
        height: 61px;
        left: 0px;
        top: 0px;
        background: #3F7BF0;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
    }
    button.google-auth:disabled {
      background-color: grey;
    }
    .google-auth img {
        position: absolute;
        left: 5.44%;
        right: 14.9%;
        top: 0%;
        bottom: 60.03%;
        background: #FFFFFF;
    }
    .google-auth span {
        position: absolute;
        width: 164px;
        height: 20px;
        left: 37px;
        top: 2px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        color: #FFFFFF;
    }
  </style>
  
  <script>
    const dispatch = createEventDispatcher()
    let signinCta
    export let clientId
    export let text = 'Sign in with Google'
    let disabled = true
    onMount(() => {
      loader(
        '//apis.google.com/js/api:client.js',
        () => window['gapi'],
        () => initialise()
      )
    })
    let GoogleAuth
    function initialise () {
      gapi.load('auth2', async () => {
        GoogleAuth = gapi.auth2.init({ client_id: clientId })
        GoogleAuth.then(attachHandler, handleInitialisationError)
      })
    }
    function attachHandler () {
      GoogleAuth.attachClickHandler(signinCta, {},
        () => dispatch('auth-success', { user: GoogleAuth.currentUser.get() }),
        e => dispatch('auth-failure', { error: e })
      )
      disabled = false
    }
    function handleInitialisationError (e) {
      console.error('gauth initialisation error', e)
      dispatch('init-error', { error: e })
    }
  </script>