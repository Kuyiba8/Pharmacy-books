import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const MyFooter = () => {
  return (
<Footer bgDark>
      <div className="w-full px-4 bg-emerald-100 lg:px-24">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.Title title="Company" />
            <Footer.LinkGroup col>
              <Footer.Link href="about">
                About
              </Footer.Link>
              <Footer.Link href="#">
                Careers
              </Footer.Link>
              <Footer.Link href="#">
                Brand Center
              </Footer.Link>
              <Footer.Link href="#">
                Blog
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="help center" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">
                Contact Us
              </Footer.Link>
              <Footer.Link href="https://www.linkedin.com/in/kuyiba-anthony-04b65a1a9/">
                Linkedin
              </Footer.Link>
              <Footer.Link href="https://web.facebook.com/kuyiba.anthony.5">
                Facebook
              </Footer.Link>
              <Footer.Link href="mailto:akuyiba8@gmail.com">
                Mail
              </Footer.Link>
              <Footer.Link href="https://github.com/Kuyiba8">
                Github
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">
                Privacy Policy
              </Footer.Link>
              <Footer.Link href="#">
                Licensing
              </Footer.Link>
              <Footer.Link href="#">
                Terms & Conditions
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="download" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">
                iOS
              </Footer.Link>
              <Footer.Link href="#">
                Android
              </Footer.Link>
              <Footer.Link href="#">
                Windows
              </Footer.Link>
              <Footer.Link href="#">
                MacOS
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-gray-400 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            by="KUYANT"
            href="#"
            year={2024}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="https://web.facebook.com/kuyiba.anthony.5"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="#"
              icon={BsTwitter}
            />
            <Footer.Icon
              href="https://github.com/Kuyiba8"
              icon={BsGithub}
            />
            {/* <Footer.Icon
              href="#"
              icon={BsDribble}
            /> */}
          </div>
        </div>
      </div>
    </Footer>  )
}

export default MyFooter