import {useState} from 'react'

const statuses = {
  DEFAULT: 'Send',
  LOADING: 'Sending message...',
  SENT: 'Message sent!',
  ERROR: 'Something went wrong, please try again.',
}

export default function Contact() {
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [message, setMessage] = useState(null)
  const [type, setType] = useState('GENERAL')
  const [status, setStatus] = useState(statuses.DEFAULT)

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {
      name,
      email,
      type,
      message,
    }

    setStatus(statuses.LOADING)
    try {
      fetch('/api/contact', {
        method: 'post',
        body: JSON.stringify(data),
      })
      setStatus(statuses.SENT)
    } catch (err) {
      setStatus(statuses.ERROR)
      console.error(err)
    }
  }

  return (
    <main className="max-w-4xl px-5 py-20 m-auto ">
      <section className="">
        <h1 className="text-5xl font-bold">Contact</h1>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-8">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block mb-2">
              Name:{' '}
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Micky Rooney"
              className="w-full p-4 border-2 border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-2">
              Email:{' '}
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="mickyrooney@gmail.com"
              className="w-full p-4 border-2 border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Type */}
          <div>
            <label htmlFor="email" className="block mb-2">
              Type:{' '}
            </label>
            <select
              onChange={(e) => setType(e.target.value)}
              name="type"
              className="w-full p-4 border-2 border-gray-300 rounded-md cursor-pointer minimal">
              <option value="GENERAL">🗣 General</option>
              <option value="PRESS">🎤 Press</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="email" className="block mb-2">
              Message:{' '}
            </label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              rows="5"
              className="w-full p-4 border-2 border-gray-300 rounded-md"
              placeholder="Hey! Lets chat."></textarea>
          </div>
          <button
            type="submit"
            className={`block w-full px-6 py-4 m-auto mt-6 text-xl text-white transition-all bg-blue-700 rounded-lg hover:scale-95 ${
              status == statuses.LOADING && 'cursor-wait bg-orange-600'
            } ${status == statuses.SENT && 'cursor-not-allowed bg-green-600'}`}>
            {status}
          </button>
        </form>
      </section>
    </main>
  )
}
