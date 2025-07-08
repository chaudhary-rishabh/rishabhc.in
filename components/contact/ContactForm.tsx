'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import emailjs from 'emailjs-com'
import toast from 'react-hot-toast'
import { ArrowRight } from 'lucide-react'
import { motion } from "framer-motion"
const schema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email'),
    message: z.string().min(1, 'Message cannot be empty'),
})

type FormData = z.infer<typeof schema>

const ContactForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    })

    const onSubmit = async (data: FormData) => {
        const toastId = toast.loading('Sending message...')
        try {
            const result = await emailjs.send(
                'service_riiwmyf',
                'template_bke7alh',
                {
                    from_name: data.name,
                    reply_to: data.email,
                    message: data.message,
                },
                'Ujxr2BAYKCxo6YfX2'
            )

            console.log('Email sent:', result.text)
            toast.success('Message sent successfully!', { id: toastId })
            reset()
        } catch (error) {
            console.error('Email error:', error)
            toast.error('Failed to send message. Please try again.', { id: toastId })
        }
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4 text-orange-600 text-center">Let&#39;s Connect</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <input
                        type="text"
                        placeholder="Your Name"
                        {...register('name')}
                        className="w-full px-4 py-3 outline-none text-black rounded-2xl bg-white/10 backdrop-blur-sm"
                    />
                    <span className='border-2 rounded-xl border-gray-600'></span>
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>

                <div>
                    <input
                        type="email"
                        placeholder="Your Email"
                        {...register('email')}
                        className="w-full px-4 py-3 outline-none text-black rounded-2xl bg-white/10 backdrop-blur-sm"
                    />
                    <span className='border-2 rounded-xl border-gray-600'></span>
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                <div>
                    <textarea
                        placeholder="Your Message"
                        {...register('message')}
                        className="w-full px-4 py-3 outline-none text-black rounded-2xl bg-white/10 backdrop-blur-sm"
                        rows={4}
                    />
                    <span className='border-2 rounded-xl border-gray-600'></span>
                    {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                >
                    <motion.button
                        className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 relative overflow-hidden group"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="relative z-10 flex items-center justify-center space-x-2">
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </motion.button>
                </button>
            </form>
        </div>
    )
}

export default ContactForm
