import emailjs from '@emailjs/browser';

const useEmail = () => {
    return {
        sendFavoriteEmail: ( params: Record<string, unknown> ) => {
            return emailjs.send(
                import.meta.env.VITE_MAILJS_SERVICE,
                import.meta.env.VITE_MAILJS_TEMPLATE, 
                params, 
                import.meta.env.VITE_MAILJS_PUBLICKEY
            )
        }
    }
}

export default useEmail;