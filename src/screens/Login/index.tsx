import { Button, Stack, TextInput } from '@react-native-material/core';
import { useContext, useState } from 'react';
import { Text, View } from 'react-native';
import AuthContext from '../../contexts/Auth';

const LoginScreen = function () {

  const authContextData = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const loginButtonPressed = function () {
    setLoading(true);
    authContextData.login({username, password})
    .then(function (res) {
      console.log(res.token);
      setLoading(false);
    });
  };

  return (
    <Stack fill center>
      <TextInput label="Login" variant='outlined' value={username} onChangeText={setUsername} />
      <TextInput label="Senha" variant='outlined' value={password} onChangeText={setPassword} />
      <Button title='Entrar' onPress={loginButtonPressed} loading={loading} disabled={loading} />
    </Stack>
  );
};

export default LoginScreen;