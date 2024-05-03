
import React from 'react' 
import { User , Inbox, Lock, Eye ,EyeOff} from 'lucide-react'



/**
 * InputBox component with optional properties.
 * @param name - The name of the input field.
 * @param type - The type of input field (e.g., 'text', 'password').
 * @param id - The id of the input field (optional).
 * @param value - The default value of the input field (optional).
 * @param placeholder - The placeholder text for the input field.
 * @param icon - The icon type for the input field (e.g., 'user', 'email', 'password').
 */
interface InputBoxProps {
   name: string;
   type: string;
   id?: string;
   value?: string;
   placeholder: string;
   icon: string;
  }
  
  const InputBox: React.FC<InputBoxProps> = ({name, type, id, value, placeholder, icon}: InputBoxProps) => {
   const [passwordVisible, setPasswordVisible] = React.useState(false);
  
   return (
    <div className='relative w-[100%] mb-4'>
     <input className='input-box' type={type === "password" ? passwordVisible ? "text" : 'password' : type} placeholder={placeholder} id={id} name={name} defaultValue={value} />
     {icon === "user" ? <User className='input-icon' /> : ""}
     {icon === "email" ? <Inbox className='input-icon' /> : ""}
     {icon === "password" ? <Lock className='input-icon' /> : ""}
  
     {type === "password" ? passwordVisible ? <EyeOff onClick={() => setPasswordVisible(!passwordVisible)} className='input-icon left-[auto] right-4 cursor-pointer'/> : <Eye onClick={() => setPasswordVisible(!passwordVisible)} className='input-icon left-[auto] right-4 cursor-pointer'/> : ""}
    </div>
   );
  }
  
  export default InputBox;


  