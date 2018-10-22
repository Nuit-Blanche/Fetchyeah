import  React  from  'react';

const  Generate = ({SelectSimpson}) => {
    return (
        <div  className="Generate">
        <button  onClick={SelectSimpson}>Get Simpson's character</button>
        </div>
    );
};
export  default  Generate;