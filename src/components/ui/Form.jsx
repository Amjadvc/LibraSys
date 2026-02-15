const variants = {
  regular: ` py-[1.4rem] px-[1.5rem] sm:px-10 sm:py-6
    rounded-[12px]
    border border-background-200
    bg-background-50 dark:bg-background-100
    text-text-700
    shadow-sm`,
  modal: `w-[800px] `,
  settingModal: `flex flex-col justify-center gap-6`,
  inventoryModal: `
  px-10 py-6
    rounded-[12px]
    border border-background-200
    bg-background-100 dark:bg-background-100
    text-text-700
    shadow-sm`,
};

function Form({ varinet = 'regular', children }) {
  return <form className={`${variants[varinet]} txt-[14px]`}>{children}</form>;
}

export default Form;
