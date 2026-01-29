const variants = {
  regular: `px-10 py-6 border border-[#e2d7c8] rounded-[8px]`,
  modal: `w-[800px] `,
};

function Form({ varinet = "regular", children }) {
  return <form className={`${variants[varinet]} txt-[14px]`}>{children}</form>;
}

export default Form;
