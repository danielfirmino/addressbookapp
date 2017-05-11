# Address Book App: A Mobile App sample developed with Apache Cordova
<p><img src="http://cordova.apache.org/static/img/cordova_bot.png" width="50" height="50"> <a href="http://cordova.apache.org/">Apache Cordova</a> is a mobile application development framework that allows you create a mobile app with few steps using only HTML, CSS and Java Script. I developed this App using  Jquery, AngularJS and Bootstrap, but you can use other Frameworks for web development.</P>
<table>
<tr>
<td>
  <img src="http://firmino.somee.com/static/img/printAndroidAddressApp.png" width="180" height="300">
</td>
<td>
  <img src="http://firmino.somee.com/static/img/printAndroidAddressApp2.png" width="180" height="300">
</td>
</tr>
</table>


<h2>1 - Setting up your environment for Mobile development </h2>
1.1 - Install Node.JS.  How to: https://nodejs.org/en/ <br>
2.2 - Install the Apache Cordova with the npm. How to: https://cordova.apache.org/docs/en/latest/guide/cli/
<div><pre><code class="language-bash" data-lang="bash"><p>on OS X and Linux:</p>   <span class="nv">$ </span>sudo npm install -g cordova
</code></pre></div>
<div><pre><code class="language-bash" data-lang="bash"><p>on Windows:</p>   C:\&gt;npm install -g cordova
</code></pre></div>
<br>
<h2>2 - Create the App</h2>
2.1 - Go to the directory where you maintain your source code, and create a cordova project:
<div class="highlight"><pre><code class="language-bash" data-lang="bash"><span class="gp">$ </span>cordova create addressbookapp com.example.addressbookapp "Address Book App"
</code></pre></div>
2.2 - It will generate a directory structure like this:
 <img src="http://firmino.somee.com/static/img/dirapp.png" width="369" height="154">
2.3 - Go to the folder "www" and delete all the files. <br>
2.4 - You should include at "www" folder the souce code(eg.: .html, .css and .js) of your app.
 <img src="http://firmino.somee.com/static/img/wwwfolder.png" width="250" height="233">
<br>
<h2>3- Add Platforms</h2>
<p>For this example,we will the Android platform, but it is possible build the app for other platforms like IOS. Lear more: at https://cordova.apache.org/docs/en/latest/guide/cli/ </p>
3.3 - Go to the app directory and run this command:
<div class="highlight"><pre><code class="language-bash" data-lang="bash"><span class="gp">$ </span>cordova platform add android
</code></pre></div>
<br>
<h2>4 - Build the App</h2>
4.1 Check the pre-requisites for building. How to:https://cordova.apache.org/docs/en/latest/guide/cli/
<div class="highlight"><pre><code class="language-bash" data-lang="bash"><span class="gp">$ </span>cordova requirements
</code></pre></div>
4.2 Build the app:
<div class="highlight"><pre><code class="language-bash" data-lang="bash"><span class="gp">$ </span>cordova build
</code></pre></div>
4.3 The "apk" android package will be created at:
..\addressbookapp\platforms\android\build\outputs\apk
4.4 It's possible to install the ".apk" in your Android device to test it.




