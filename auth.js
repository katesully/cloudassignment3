// Set up the AWS SDK
function initializeAuthentication() {
    var poolData = {
        UserPoolId: 'your_user_pool_id',
        ClientId: 'your_client_id'
    };
    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    console.log('userPool: ', userPool);
}

initializeAuthentication();


AWS.config.region = 'us-west-2'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-west-2:3800e909-d1df-4324-836e-25596f1ecbd5'
});

// login
function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var authenticationData = {
        Username: username,
        Password: password,
    };

    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);

    var poolData = {
        UserPoolId: 'us-west-2_UPq7KfdUd',
        ClientId: '2996furi6gmspid0hsneuu8r24'
    };

    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

    var userData = {
        Username: username,
        Pool: userPool
    };

    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function(result) {
            console.log('Authentication successful');
            window.location.href = 'home.html';
        },
        onFailure: function(err) {
            console.error('Authentication failed');
        },
    });
}



