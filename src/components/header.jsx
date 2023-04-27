const Header = ({ title, subTitle }) => {
  return (
    <div>
      <h1 className="uppercase text-[34px] font-medium text-headerColor">{title}</h1>
      <h2 className="text-[14px] text-fontSecondaryColor">{subTitle}</h2>
    </div>
  );
};

export default Header;
