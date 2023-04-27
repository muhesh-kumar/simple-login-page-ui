import Header from './components/header';
import InputWithLabel from './components/input-with-label';
import RedBtn from './components/red-btn';
import SignInWithProviderBtn from './components/sign-in-with-provider-btn';

import person from './assets/person.svg';
import googleLogo from './assets/google-logo.svg';

const App = () => {
  return (
    <div className="flex w-screen font-poppins justify-center items-center">
      <div className="flex justify-center items-center w-1/2">
        <div className="flex flex-col gap-10">
          <Header
            title="Welcome Back"
            subTitle="Welcome Back! Please enter your details"
          />

          <div className="flex flex-col gap-5">
            <InputWithLabel
              id="email"
              type="email"
              labelText="Email"
              placeholder="Enter your email"
            />

            <InputWithLabel
              id="password"
              type="password"
              labelText="Password"
            />

            <div className="flex justify-between items-center font-medium text-xs">
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="remember-me"
                  value=""
                  className="w-4 h-4 border border-black/25 rounded"
                />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <div className="flex">
                <a href="/">Forgot password</a>
              </div>
            </div>

            <RedBtn btnText="Sign In" />
            <SignInWithProviderBtn
              providerName="Google"
              providerLogo={googleLogo}
            />

            <div className="flex justify-center">
              <p className="font-medium text-[10px]">
                Don't have an account?{' '}
                <span className="text-bgRedColor">Sign up for free!</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/2 bg-blend-darken">
        <img
          src={person}
          alt="Person Image"
          className="object-cover h-screen w-full"
        />
      </div>
    </div>
  );
};

export default App;
