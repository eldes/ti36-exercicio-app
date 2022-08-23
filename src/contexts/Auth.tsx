import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, ReactNode, useEffect, useState } from 'react';
import User from '../models/User';
import AuthService, { LoginRequest, LoginResponse } from '../services/Auth';

type AuthContextData = {
  logged: boolean;
  user: User | undefined;
  login(request: LoginRequest): Promise<LoginResponse>;
  logout(): void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

type Props = {
  children: ReactNode;
};

const AuthProvider: React.FC<Props> = function (props) {
  const [user, setUser] = useState<User | undefined>();

  useEffect(function () {
    AsyncStorage.getItem('user').then(function (user) {
      if (user) {
        setUser(JSON.parse(user));
      }
    } )
  }, []);

  const login = function (request: LoginRequest) {
    return new Promise<LoginResponse>(function (resolve) {
      AuthService.login(request)
      .then(function (response) {
        setUser(response.user)
        AsyncStorage.setItem('token', JSON.stringify(response.token));
        AsyncStorage.setItem('user', JSON.stringify(response.user));
        resolve(response);
      });
    });
  };

  const logout = function () {
    AsyncStorage.clear().then(function () {
      setUser(undefined);
    });
  };

  return (
    <AuthContext.Provider value={{logged: !!user, user, login, logout}}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
export {
  AuthProvider
};