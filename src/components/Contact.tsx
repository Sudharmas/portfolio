import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'sudharma@sudharma-s.in.net',
      href: 'mailto:sudharma@sudharma-s.in.net'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 7483267532',
      href: 'tel:+917483267532'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Udupi',
      href: 'https://maps.app.goo.gl/FMSn1nm3qsuzNZ4K9'
    }
  ]

  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="text-primary" style={{ textShadow: '0 0 17px #22c55e, 0 0 100px #22c55e' }}>Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project and create
              something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="glass-strong border-0 glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  className="space-y-6"

                  // ...existing code...
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const formData = new FormData(form);

                    const payload = {
                      user_name: formData.get('user_name'),
                      user_email: formData.get('user_email'),
                      subject: formData.get('subject'),
                      message: formData.get('message'),
                    };

                    const res = await fetch('http://localhost:3001/api/contact', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(payload),
                    });

                    if (res.ok) {
                      setSent(true);
                      form.reset();
                    } else {
                      alert('Error sending message. Please try again.');
                    }
                  }}
                // ...existing code...
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="user_name"
                        placeholder="Your Name"
                        className="glass border-white/20 focus:border-primary"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        name="user_email"
                        type="email"
                        placeholder="Your Email"
                        className="glass border-white/20 focus:border-primary"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Input
                      name="subject"
                      placeholder="Subject"
                      className="glass border-white/20 focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={6}
                      className="glass border-white/20 focus:border-primary resize-none"
                      required
                    />
                  </div>
                  <Button
                    className="w-full glow-strong group"
                    type="submit"
                  >
                    <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                  {sent && (
                    <div className="text-green-500 text-center mt-2">Message sent successfully!</div>
                  )}
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always open to discussing new opportunities, creative projects,
                  or potential collaborations. Feel free to reach out through any of
                  the channels below.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center p-4 glass-strong rounded-lg hover:glow transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{info.title}</h4>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <Card className="glass-strong border-0 mt-8">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-4">Let's Work Together</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    Available for freelance projects and full-time opportunities.
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm font-medium">Available for work</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
