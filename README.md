# Fake VAC Ban
It disconnects you as soon as you enter a server and displays a "vac banned from secure server" message on screen.
Could be used as a prank.
You need to add -netcon 25 (default is 25) on csgo launch options.
This won't cause a real VAC ban but I am not responsible for any bans or such , using this is your decision.

**If It Is Not Working:**
Enable telnet using this tutorial:

https://www.youtube.com/watch?v=6Z1hGTIXvTs

After that try to connect to port 25 via this command:

**telnet 127.0.0.1 25**

If you are connected, you can type "echo working" in telnet console and if you can see "working" on your console in csgo that means it is working.

If you couldn't connect , add a firewall exception . If that doesn't work either , try another port.

