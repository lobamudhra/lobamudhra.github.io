(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[387],{3044:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/courses/spring-security/lessons/verify-jwt",function(){return c(5887)}])},476:function(d,b,a){"use strict";var e=a(7568),c=a(4051),f=a.n(c),g=a(5893),h=a(637),i=a(7294),j=a(1896);b.Z=function(a){var l,b=a.fileName,m=a.href,c=a.language,d=void 0===c?"java":c,n=a.children,k=(0,i.useState)(!1),o=k[0],q=k[1],p=(l=(0,e.Z)(f().mark(function a(){return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,navigator.clipboard.writeText(n);case 2:q(!0),setTimeout(function(){return q(!1)},6e3);case 4:case"end":return a.stop()}},a)})),function(){return l.apply(this,arguments)});return(0,g.jsxs)("div",{className:"border rounded fs-6 my-4",children:[b&&(0,g.jsxs)("div",{className:"p-3 bg-light border-bottom",children:[(0,g.jsx)("span",{className:"font-monospace",children:(0,g.jsx)("a",{href:m,target:"_blank",children:b})}),(0,g.jsx)("span",{className:"float-end cursor-pointer","data-bs-toggle":"tooltip","data-bs-title":"Copy code",onClick:p,children:(0,g.jsx)("i",{className:"bi-clipboard"})})]}),(0,g.jsx)("pre",{className:"m-0 px-3 pb-3",children:(0,g.jsx)("code",{className:"language-".concat(d),children:(0,g.jsx)("span",{dangerouslySetInnerHTML:{__html:h.Z.highlight(n,{language:d}).value}})})}),o&&(0,g.jsx)(j.Z,{children:"Code copied to clipboard"})]})}},9963:function(d,b,a){"use strict";a.d(b,{aC:function(){return h},k8:function(){return i},nL:function(){return g}});var e=a(5893),c=a(4046),f=a.n(c);function g(a){var b=a.children;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("h1",{className:"display-5 mt-2 mb-2",children:b}),(0,e.jsx)("p",{className:f().underline})]})}function h(a){var b=a.children;return(0,e.jsx)("h3",{className:"fw-light mt-5 mb-2",children:b})}function i(a){var b=a.children;return(0,e.jsx)("h4",{className:"fw-light mt-5 mb-2",children:b})}},4621:function(c,a,b){"use strict";var d=b(5893);a.Z=function(a){var c=a.src,b=a.title;return(0,d.jsxs)("div",{className:"p-3",children:[(0,d.jsx)("div",{className:"mb-3 text-secondary text-center",children:(0,d.jsx)("em",{children:b})}),(0,d.jsx)("img",{className:"img-fluid rounded border shadow",src:c,alt:b})]})}},7291:function(d,b,a){"use strict";var e=a(5893),c=a(9472),f=a.n(c);b.Z=function(a){var b=a.children;return(0,e.jsx)("mark",{className:"font-monospace border rounded p-1 ".concat(f().mark),children:b})}},6614:function(d,b,a){"use strict";var e=a(5893),c=a(3394),f=a.n(c);b.Z=function(a){var b=a.title,c=a.children;return(0,e.jsxs)("section",{className:"px-3 pt-1 my-5 ".concat(f().notes),children:[(0,e.jsxs)("h4",{className:"mb-3",children:[(0,e.jsx)("i",{className:"bi bi-info-circle me-2"}),void 0===b?"Note":b]}),c]})}},5887:function(f,b,a){"use strict";a.r(b);var g=a(5893),h=a(9963),i=a(130),j=a(7291),k=a(476),l=a(4621),m=a(6614),c=a(3274),d=a(9927),e=a(358);b.default=(0,c.default)(function(a){var b=a.githubPath;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("section",{children:[(0,g.jsx)(h.nL,{children:"Verify JWT"}),(0,g.jsxs)(i.Z,{children:["As JWT is self-contained with the Subject information to whom the token is issued, we do not need to associate the token with the ",(0,g.jsx)(j.Z,{children:"AppUser"})," record in the database. Because of which we no longer need to identify the user from the database as well. All we need is just to verify the signature using the ",(0,g.jsx)(j.Z,{children:"SecretKey"})," and parse the JWT to construct the ",(0,g.jsx)(j.Z,{children:"Authentication"})," object as authenticated principal."]}),(0,g.jsxs)(i.Z,{children:["Let's update ",(0,g.jsx)(j.Z,{children:"TokenVerificationFilter"}),", by replacing the existing logic to identify the ",(0,g.jsx)(j.Z,{children:"AppUser"})," from the database using opaque token, with the below code:"]}),(0,g.jsx)(k.Z,{fileName:"TokenVerificationFilter.java",href:b+"/src/main/java/com/facadecode/spring/security/filters/TokenVerificationFilter.java",children:'\n@Override  \nprotected void doFilterInternal(HttpServletRequest request, \n            HttpServletResponse response, \n            FilterChain filterChain) throws ServletException, IOException {\n    String authorizationHeader = request.getHeader(HttpHeaders.AUTHORIZATION);\n\n    if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {\n        String accessToken = authorizationHeader.replace("Bearer ", "");\n        // Parse JWT using the SecretKey\n        Claims claims = Jwts.parserBuilder()\n            .setSigningKey(jwtConfig.getSecretKey())\n            .build()\n            .parseClaimsJws(accessToken)\n            .getBody();\n\n        // Check if JWT has expired\n        if (claims.getExpiration().after(new Date())) {\n            Authentication authentication = UsernamePasswordAuthenticationToken.authenticated(\n                    claims.getSubject(), null, this.getAuthorities(claims)\n            );\n            authenticationFacade.setAuthentication(authentication);\n        }\n    }\n\n    filterChain.doFilter(request, response);\n}\n\nprivate List<GrantedAuthority> getAuthorities(Claims claims) {\n    return ((List<String>) claims.get("authorities")).stream()\n        .map(SimpleGrantedAuthority::new)\n        .collect(Collectors.toList());\n}\n'}),(0,g.jsxs)(i.Z,{children:[(0,g.jsx)(j.Z,{children:"Jwts"})," provides another Builder class ",(0,g.jsx)(j.Z,{children:"JwtParserBuilder"})," to build ",(0,g.jsx)(j.Z,{children:"JwtParser"})," object. We are calling ",(0,g.jsx)(j.Z,{children:"parseClaimsJws()"})," method on ",(0,g.jsx)(j.Z,{children:"JwtParser"})," which accepts ",(0,g.jsx)(j.Z,{children:"SecretKey"})," to verify the signature and parse the content of JWT."]}),(0,g.jsx)(m.Z,{children:(0,g.jsxs)(i.Z,{children:["You may notice another parser method ",(0,g.jsx)(j.Z,{children:"parseClaimsJwt()"})," in ",(0,g.jsx)(j.Z,{children:"JwtParser"}),". But we are using ",(0,g.jsx)(j.Z,{children:"parseClaimsJws()"})," because signed JWT tokens are called JWS (not JWT), and in our case we want to parse the JWS signed with the ",(0,g.jsx)(j.Z,{children:"SecretKey"}),"."]})}),(0,g.jsxs)(i.Z,{children:["The parsed JWT body has the information we saw earlier in the decoded payload data in the JWT official page. Now instead of identifying the user and his authorities from the database, we can get the same from the JWT payload. But before creating ",(0,g.jsx)(j.Z,{children:"Authentication"})," object form the JWT payload we have to check if the token has expired."]})]}),(0,g.jsxs)("section",{children:[(0,g.jsx)(h.aC,{children:"Tidy up and Test"}),(0,g.jsxs)(i.Z,{children:["We can remove the ",(0,g.jsx)("em",{children:"token"})," and ",(0,g.jsx)("em",{children:"tokenExpiryTime"})," from the ",(0,g.jsx)(j.Z,{children:"AppUser"})," entity as we are not using it anymore. We can also tidy up some of the code related to opaque token which are no more relevant with JWT."]}),(0,g.jsxs)("ul",{className:"overflow-auto py-3",children:[(0,g.jsxs)("li",{children:["Remove ",(0,g.jsx)(j.Z,{children:"invalidateToken()"})," from ",(0,g.jsx)(j.Z,{children:"AuthenticationController"})," and ",(0,g.jsx)(j.Z,{children:"AuthenticationService"}),"."]}),(0,g.jsxs)("li",{children:["Remove ",(0,g.jsx)(j.Z,{children:"deleteToken()"})," from ",(0,g.jsx)(j.Z,{children:"UserService"}),"."]}),(0,g.jsxs)("li",{children:["Remove pre-authorize condition defined for ",(0,g.jsx)(j.Z,{children:"deleteToken()"})," in ",(0,g.jsx)(j.Z,{children:"SecurityConstants"}),"."]}),(0,g.jsxs)("li",{children:["Remove ",(0,g.jsx)(j.Z,{children:"loadUserByToken()"})," from ",(0,g.jsx)(j.Z,{children:"DbUserDetailsService"}),"."]}),(0,g.jsxs)("li",{children:["Remove ",(0,g.jsx)(j.Z,{children:"findByTokenAndTokenExpiryTimeGreaterThan()"})," from ",(0,g.jsx)(j.Z,{children:"AppUserRepository"}),"."]})]}),(0,g.jsxs)(i.Z,{children:["Restart the application and get the JWT generated for ",(0,g.jsx)("em",{children:"Admin"})," user credentials by sending a POST request to ",(0,g.jsx)("u",{children:"GenerateToken"})," API."]}),(0,g.jsx)(l.Z,{src:"/assets/images/spring-security/lesson28-01.png",title:"JWT generated for Admin user credentials on successful authentication"}),(0,g.jsxs)(i.Z,{children:["Now choose the Authorization type as ",(0,g.jsx)(j.Z,{children:"Bearer Token"}),", and paste the generated JWT in the Token Field. If we send a GET request to ",(0,g.jsx)("u",{children:"ListStudents"})," API with JWT as the Bearer Token in the Authorization header, ",(0,g.jsx)(j.Z,{children:"TokenVerificationFilter"})," will verify the signature of JWS and parse the content to create ",(0,g.jsx)(j.Z,{children:"Authentication"})," object as an authenticated principal. Rest of the token-based authentication process remains the same as with our opaque token."]}),(0,g.jsx)(l.Z,{src:"/assets/images/spring-security/lesson28-02.png",title:"List of students response for the authorized JWT issed for Admin user"}),(0,g.jsx)(i.Z,{children:"Similarly you can test for all the other protected resources for all the users with their respective JWT."}),(0,g.jsxs)(m.Z,{title:"Conclusion",children:[(0,g.jsx)(i.Z,{children:"We reached the epic conclusion of this course. I hope you have got a better knowledge on how to secure every layer of an application from the scratch using some of the widely used concepts in Spring Security."}),(0,g.jsxs)(i.Z,{children:["I will update this course constantly as and when we get new releases in Spring Security. Please reach out to me in email for any improvements or additions. My email address is ",(0,g.jsx)(j.Z,{children:"email [at] this website name"}),"."]})]})]})]})},(0,e.s)(d.Z,"verify-jwt"))},4046:function(a){a.exports={heading:"Heading_heading__aP_DN",underline:"Heading_underline__sSwtx"}},9472:function(a){a.exports={mark:"Mark_mark__8gh_T"}},3394:function(a){a.exports={notes:"Notes_notes__up3CK"}}},function(a){a.O(0,[734,428,637,274,774,888,179],function(){var b;return a(a.s=3044)}),_N_E=a.O()}])