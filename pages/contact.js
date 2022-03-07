import {useState} from 'react'

export default function Contact() {
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [message, setMessage] = useState(null)
  const [type, setType] = useState('GENERAL')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message, type)

    // setLoading(true)
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
              loading && 'cursor-wait'
            }`}>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </section>
    </main>
  )
}
