const SignInWithProviderBtn = ({ providerName, providerLogo }) => {
  return (
    <button className="font-medium p-[5px] text-xs md:text-sm rounded-xl flex justify-center items-center gap-3 border border-black/25 h-[45px]">
      <img src={providerLogo} alt="Provider Logo" className="h-8" />
      <p className="border-black/25 font-medium text-xs md:text-sm">
        Sign in with {providerName}
      </p>
    </button>
  );
};

export default SignInWithProviderBtn;
