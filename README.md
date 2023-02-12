![Workflow Status](https://github.com/mad201802/firstpass/actions/workflows/package.yaml/badge.svg) ![Frontend Tests](https://github.com/mad201802/firstpass/actions/workflows/pullrequest_frontend.yaml/badge.svg) \
![License](https://badgen.net/github/license/mad201802/firstpass)
![Latest Release](https://badgen.net/github/release/mad201802/firstpass)
![Open Issues](https://badgen.net/github/open-issues/mad201802/firstpass)
![Commits](https://badgen.net/github/commits/mad201802/firstpass/main)
![Pull Requests](https://badgen.net/github/prs/mad201802/firstpass)

<br>

# FirstPass <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Key.png" alt="Key" width="30" height="30" style="transform: translate(0px, 5px)" />
The best Password Manager in the World! <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Exploding%20Head.png" alt="Exploding Head" width="22" height="22" style="transform: translateY(5px)" />

FirstPass is designed to allow users to store their passwords securely and easily. Among other things, we offer a password generator that automatically generates secure passwords. This is seamlessly integrated into the manager and can be configured as desired. But not only username and password can be stored: It is also possible to save a URL to the website to access it more easily. It is also possible to leave a note, which is of course also encrypted. The security of the data has the highest priority for us!

  - [Features](#features)
  - [Build from Source](#build-from-source)
  - [Installation](#installation)
    - [Windows](#windows)
    - [Mac](#mac)
    - [Linux](#linux)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Copyright](#copyright)

<br>

## Features <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Star-Struck.png" alt="Star-Struck" width="25" height="25" style="transform: translateY(5px)" />


 - _Encrypted storage_ of passwords using AES-256 encryption
 - Automatically _generates strong passwords_
 - Ability to store and manage passwords for _multiple accounts and websites_
 - _Cross-platform compatibility_ (Windows, Mac, Linux)
 - User-friendly interface including _customizable Themes_

<br>

## Build from source <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Hammer%20and%20Wrench.png" alt="Hammer and Wrench" width="25" height="25" style="transform: translateY(5px)" />


In order to build FirstPass from source you need to have NodeJS, Java 17, npm & yarn. \
To build, navigate to the project directory and run:
```bash
npm run dist
```
This will build the backend and the frontend and package it into a distributable package for you platform. \
The output will be in the `dist` folder.

<br>

## Installation <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Floppy%20Disk.png" alt="Floppy Disk" width="25" height="25" style="transform: translateY(5px)" />

To install the password manager, follow the instructions for your platform:

### Windows

1. Download the `Firstpass Setup X.X.X.exe` file from the releases page.
2. Double-click the file to start the installation process.
3. Follow the on-screen instructions to complete the installation.

### Mac (only tar.gz works as of now, untested)

1. Download the `firstpass-X.X.X-mac.tar.gz` file from the releases page.
2. Extract the archive to your desired install location.
4. Navigate into the extracted directory and execute the `Firstpass` executable.


### Linux (only tar.gz works as of now)

1. Download the `firstpass-X.X.X.tar.gz`
   file from the releases page.
2. Extract the archive to your desired install location.	
3. Navigate into the extracted directory and execute the `Firstpass` executable.

<br>

## Usage <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Electric%20Plug.png" alt="Electric Plug" width="25" height="25" style="transform: translateY(5px)" />

- _**Start the password manager**_ and create a new database or log in to an existing database.
- Add a _**new password**_ by clicking the "Add" button and entering the required information.
- _**Add, edit or delete a category**_ by clicking the three buttons at the top of the sidebar
- You can also **_generate a strong password_** by clicking the button next to the password input field
- To **_update, delete or show a password_**, just click on its entry in the password list
- To **_move a password_** in a different category, just drag and drop it
- To **_add a new Theme_**, go to the settings menu and clone an existing Theme or load a JSON-File in the right format

<br>

## Troubleshooting <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Screwdriver.png" alt="Screwdriver" width="25" height="25" style="transform: translateY(5px)" />

In case you encounter any problems, feel free to contact us via [email](md148@hdm-stuttgart.de) or open an issue on GitHub.

<br>

## Contributing <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Handshake.png" alt="Handshake" width="25" height="25" style="transform: translateY(5px)" />

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.
Please make sure to update tests accordingly.

<br>

## Copyright <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Page%20with%20Curl.png" alt="Page with Curl" width="25" height="25" style="transform: translateY(5px)" />

FirstPass (c) 2022
[Alex Bossert](mailto:ab306@hdm-stuttgart.de),
[Antonia Herdtner](mailto:ah247@hdm-stuttgart.de),
[Leonard Laisé](mailto:ll071@hdm-stuttgart.de),
[Luca von Kannen](mailto:lv042@hdm-stuttgart.de),
[Maurice Dolibois](mailto:md147@hdm-stuttgart.de),
[Michael Dick](mailto:md148@hdm-stuttgart.de),
[Tom Flocken](mailto:tf054@hdm-stuttgart.de) \
SPDX-License-Identifier: GPL-3.0
