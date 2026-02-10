const variants = {
  regular: `px-10 py-6
    rounded-[12px]
    border border-background-200
    bg-background-50
    text-text-700
    shadow-sm`,
  modal: `w-[800px] `,
  settingModal: `flex justify-center gap-6`,
};

function Form({ varinet = 'regular', children }) {
  return <form className={`${variants[varinet]} txt-[14px]`}>{children}</form>;
}

export default Form;
