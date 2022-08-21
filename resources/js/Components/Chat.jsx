import React, { useContext, useState } from 'react'
import Input from './Input'
import { FiSend } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'
import { MessageContext } from '@/Pages/User/Customer/Shop';
import { Link, useForm } from '@inertiajs/inertia-react';
import Button from './Button';



function ChatBubble(props) {
    return (
        <div className={`flex flex-row p-5 space-x-5 relative ${props.ismine ? "justify-end" : "justify-start"}`}>
            {!props.ismine && <img className="w-8 h-8 rounded-full" src='https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80' />}
            <div className='flex flex-col'>
                <label className='border p-2 bg-secondary text-primary rounded ' >{props.message}</label>
                <label className={`text-xs text-black ${props.ismine ? "text-start" : "text-end"}`}>10:00 pm</label>
            </div>
        </div>);
}


export default function Chat(props) {
    const { message, setmessage,channel,isTyping,setisTyping } = useContext(MessageContext);
    const [mymessage, setmymessage] = useState()

    const submit = async () => {

        axios.post('/api/message', {
            message: mymessage,
            user: props.user
        });
        setisTyping(false)
        setmessage([
            ...message,
            {
                message: mymessage,
                ismine: true
            }
        ])


    }


    return (
        <div className='bg-primary text-black absolute w-1/3 h-2/3 bottom-0 ml-5 border rounded-t-md flex flex-col'>
            <div className='flex flex-row items-center p-3 border-b-2'>
                <label
                    className='flex-1'
                >Gerald Orzal</label>
                <MdClose />
            </div>
            <div className='flex-1 overflow-y-scroll relative'>

                {
                    message?.map(({ message, ismine }) => <ChatBubble
                        message={message}
                        ismine={ismine}
                    />)
                }

            {
                isTyping&&(<div className='fixed bg-black text-primary bottom-20 w-1/3'
                >User is typing</div>
            )
            }
            </div>
            <div className='flex flex-row items-center space-x-5 p-2'>


                <Input className="ml-2 flex-1" handleChange={


                    async (d) => {
                        setmymessage(d.target.value);
                        channel.whisper('.typing',{
                            name:props.user.name
                        })
                        
                    }


                }

                />
                <Button
                    onClick={() => submit()}
                >
                    <FiSend


                        size={20}
                    />
                </Button>
            </div>

        </div>

    )
}
