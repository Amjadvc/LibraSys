const variants = {
  regular: `px-10 py-4 border border-[#d1d5db] rounded-[8px] bg-white`,
  modal: `w-[800px] `,
};

function Form({ varinet = "regular", children }) {
  return <form className={`${variants[varinet]} txt-[14px]`}>{children}</form>;
}

export default Form;
