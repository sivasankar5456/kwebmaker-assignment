'use client';

const Button = ({ title = "", click = () => {}, className = "",style={} }) => {
  return (
    <button className={`btn btn-outline-light custom-button ${className}`} style={{...style}} onClick={()=>null}>
      {title}
    </button>
  );
};

export default Button;
