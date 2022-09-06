(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[328],{5307:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/courses/spring-security/lessons/generate-token",function(){return c(6748)}])},2018:function(d,b,a){"use strict";var e=a(5893),c=a(5927),f=a.n(c);b.Z=function(a){var c=a.href,d=a.children,b=a.target;return(0,e.jsxs)("a",{href:c,target:void 0===b?"":b,className:"text-decoration-none","data-bs-toggle":"tooltip","data-bs-title":"Read article",children:[(0,e.jsx)("i",{className:"bi bi-file-text ".concat(f().linkIcon)}),(0,e.jsx)("span",{className:f().linkText,children:d})]})}},476:function(d,b,a){"use strict";var e=a(7568),c=a(4051),f=a.n(c),g=a(5893),h=a(637),i=a(7294),j=a(1896);b.Z=function(a){var l,b=a.fileName,m=a.href,c=a.language,d=void 0===c?"java":c,n=a.children,k=(0,i.useState)(!1),o=k[0],q=k[1],p=(l=(0,e.Z)(f().mark(function a(){return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,navigator.clipboard.writeText(n);case 2:q(!0),setTimeout(function(){return q(!1)},6e3);case 4:case"end":return a.stop()}},a)})),function(){return l.apply(this,arguments)});return(0,g.jsxs)("div",{className:"border rounded fs-6 my-4",children:[b&&(0,g.jsxs)("div",{className:"p-3 bg-light border-bottom",children:[(0,g.jsx)("span",{className:"font-monospace",children:(0,g.jsx)("a",{href:m,target:"_blank",children:b})}),(0,g.jsx)("span",{className:"float-end cursor-pointer","data-bs-toggle":"tooltip","data-bs-title":"Copy code",onClick:p,children:(0,g.jsx)("i",{className:"bi-clipboard"})})]}),(0,g.jsx)("pre",{className:"m-0 px-3 pb-3",children:(0,g.jsx)("code",{className:"language-".concat(d),children:(0,g.jsx)("span",{dangerouslySetInnerHTML:{__html:h.Z.highlight(n,{language:d}).value}})})}),o&&(0,g.jsx)(j.Z,{children:"Code copied to clipboard"})]})}},9963:function(d,b,a){"use strict";a.d(b,{aC:function(){return h},k8:function(){return i},nL:function(){return g}});var e=a(5893),c=a(4046),f=a.n(c);function g(a){var b=a.children;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("h1",{className:"display-5 mt-2 mb-2",children:b}),(0,e.jsx)("p",{className:f().underline})]})}function h(a){var b=a.children;return(0,e.jsx)("h3",{className:"fw-light mt-5 mb-2",children:b})}function i(a){var b=a.children;return(0,e.jsx)("h4",{className:"fw-light mt-5 mb-2",children:b})}},4621:function(c,a,b){"use strict";var d=b(5893);a.Z=function(a){var c=a.src,b=a.title;return(0,d.jsxs)("div",{className:"p-3",children:[(0,d.jsx)("div",{className:"mb-3 text-secondary text-center",children:(0,d.jsx)("em",{children:b})}),(0,d.jsx)("img",{className:"img-fluid rounded border shadow",src:c,alt:b})]})}},7291:function(d,b,a){"use strict";var e=a(5893),c=a(9472),f=a.n(c);b.Z=function(a){var b=a.children;return(0,e.jsx)("mark",{className:"font-monospace border rounded p-1 ".concat(f().mark),children:b})}},6614:function(d,b,a){"use strict";var e=a(5893),c=a(3394),f=a.n(c);b.Z=function(a){var b=a.title,c=a.children;return(0,e.jsxs)("section",{className:"px-3 pt-1 my-5 ".concat(f().notes),children:[(0,e.jsxs)("h4",{className:"mb-3",children:[(0,e.jsx)("i",{className:"bi bi-info-circle me-2"}),void 0===b?"Note":b]}),c]})}},6748:function(f,b,a){"use strict";a.r(b);var g=a(5893),h=a(9963),i=a(130),j=a(7291),k=a(476),l=a(4621),m=a(6614),c=a(3274),d=a(9927),e=a(358),n=a(2018);b.default=(0,c.default)(function(b){var a=b.githubPath;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("section",{children:[(0,g.jsx)(h.nL,{children:"Generate Token"}),(0,g.jsx)(i.Z,{children:"Tokens are always better than username/password as they are uniquely generated on each login. And they do not hang around for a long time as they are invalidated either when the user logout or when it reaches its expiry time."}),(0,g.jsx)(i.Z,{children:"Token-based auth requires the user to provide username/password only once during login. It then generates a unique token (generally a random string) for the user on successful authentication. This unique token can be sent on subsequent requests to identify the user until the token expires or invalidated."}),(0,g.jsx)(i.Z,{children:"But using tokens requires a bit of learning curve on how to generate, verify and invalidate them which is not the case with Basic Auth. We will implement token-based authentication mechanism in this section using our own token of random string i.e., UUID."}),(0,g.jsx)(m.Z,{children:(0,g.jsx)(i.Z,{children:"JSON Web Token (JWT) is an open, industry standard token specification widely popular for many reasons. Rather than focusing on the type of the token first, let's understand how token-based authentication mechanism works. And then we will replace our token with JWT using battle-tested production grade JWT library."})})]}),(0,g.jsxs)("section",{children:[(0,g.jsx)(h.aC,{children:"AuthenticationService"}),(0,g.jsxs)(i.Z,{children:["First we will create an ",(0,g.jsx)(j.Z,{children:"AuthenticationService"})," component to implement ",(0,g.jsx)(j.Z,{children:"generateToken()"})," method which accepts username and password and returns UUID on successful authentication."]}),(0,g.jsx)(k.Z,{fileName:"AuthenticationService.java",href:a+"/src/main/java/com/facadecode/spring/security/service/AuthenticationService.java",children:"\n@Service\npublic class AuthenticationService {\n    public String generateToken(String username, String password) {\n        // Authenticate using Spring Security's AuthenticationManager with username/password\n        // Generate and return token if authentication success\n    }\n}\n"})]}),(0,g.jsxs)("section",{children:[(0,g.jsx)(h.aC,{children:"AuthenticationManager"}),(0,g.jsxs)(i.Z,{children:["We are not going to perform authentication by ourselves by checking the existence of username and password in the database. We will use ",(0,g.jsx)(j.Z,{children:"AuthentionManager"}),", we talked about in ",(0,g.jsx)(n.Z,{href:"/courses/spring-security/lessons/current-authenticated-user",children:"Current Authenticated User"})," chapter, where it accepts ",(0,g.jsx)(j.Z,{children:"Authentication"})," object as authentication request and returns the same as authenticated principal on successful authentication."]}),(0,g.jsxs)(i.Z,{children:["We will use ",(0,g.jsx)(j.Z,{children:"UsernamePasswordAuthenticationToken"})," to create an ",(0,g.jsx)(j.Z,{children:"Authentication"})," object as authentication request using username & password provided by the user. ",(0,g.jsx)(j.Z,{children:"AuthenticationManager"})," delegates the authentication process to a list of ",(0,g.jsx)(j.Z,{children:"AuthenticationProvider"}),". ",(0,g.jsx)(j.Z,{children:"DaoAuthenticationProvider"})," is one of such implementations we discussed in ",(0,g.jsx)(n.Z,{href:"/courses/spring-security/lessons/db-backed-userdetailsservice",children:"DB Backed UserDetailsService"})," chapter, which uses our ",(0,g.jsx)(j.Z,{children:"DbUserDetailsService"})," to load the user details by username. It will then perform the authentication and return the authenticated principal. We will then return the UUID token after verifying the authenticated principal."]}),(0,g.jsx)(k.Z,{fileName:"AuthenticationService.java",href:a+"/src/main/java/com/facadecode/spring/security/service/AuthenticationService.java",children:"\n@Service\npublic class AuthenticationService {\n    @Autowired\n    private AuthenticationManager authenticationManager;\n\n    public String generateToken(String username, String password) {\n        Authentication authentication = UsernamePasswordAuthenticationToken.unauthenticated(username, password);\n        authentication = authenticationManager.authenticate(authentication);\n\n        String token = null;\n        if (authentication.isAuthenticated()) {\n            token = UUID.randomUUID().toString();\n        }\n\n        return token;\n    }\n}\n"}),(0,g.jsxs)(i.Z,{children:["By default ",(0,g.jsx)(j.Z,{children:"AuthenticationManager"})," is not exposed as a bean, we have to retrieve it from ",(0,g.jsx)(j.Z,{children:"AuthenticationConfiguration"})," and expose it as a bean from ",(0,g.jsx)(j.Z,{children:"SecurityConfig"})," as below:"]}),(0,g.jsx)(k.Z,{fileName:"SecurityConfig.java",href:a+"/src/main/java/com/facadecode/spring/security/config/SecurityConfig.java",children:"\n@Configuration\n@EnableGlobalMethodSecurity(prePostEnabled = true)\npublic class SecurityConfig extends GlobalMethodSecurityConfiguration {\n    // Other details omitted for brevity\n\n    @Bean\n    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {\n        return authenticationConfiguration.getAuthenticationManager();\n    }\n}\n"})]}),(0,g.jsxs)("section",{children:[(0,g.jsx)(h.aC,{children:"AuthenticationController"}),(0,g.jsxs)(i.Z,{children:["Now let's create a REST API to get the ",(0,g.jsx)("em",{children:"username"})," and ",(0,g.jsx)("em",{children:"password"})," from the user and return the generated token back from ",(0,g.jsx)(j.Z,{children:"AuthenticationService"}),"."]}),(0,g.jsx)(k.Z,{fileName:"AuthenticationController.java",href:a+"/src/main/java/com/facadecode/spring/security/controller/AuthenticationController.java",children:'\n@RestController\n@RequestMapping("auth")\npublic class AuthenticationController {\n    @Autowired\n    private AuthenticationService authenticationService;\n\n    @PostMapping(path = "token", consumes = {APPLICATION_FORM_URLENCODED_VALUE})\n    public ResponseEntity<Map<String,String>> generateToken(@RequestParam("username") String username,\n                                @RequestParam("password") String password) {\n        String token = authenticationService.generateToken(username, password);\n        Map<String, String> tokenResponse = Collections.singletonMap("token", token);\n        return ResponseEntity.ok(tokenResponse);\n    }\n}\n'}),(0,g.jsxs)(i.Z,{children:["As ",(0,g.jsx)("u",{children:"GenerateToken"})," API must be accessible to everyone, we have to update ",(0,g.jsx)(j.Z,{children:"HttpSecurity"})," to permit this API. So we will add the API url in ",(0,g.jsx)(j.Z,{children:"SecurityConstants"})," as well."]}),(0,g.jsx)(k.Z,{fileName:"ApiSecurityConfig.java",href:a+"/src/main/java/com/facadecode/spring/security/config/ApiSecurityConfig.java",children:"\n@Bean\npublic SecurityFilterChain apiFilterChain(HttpSecurity http) throws Exception {\n    http\n        .csrf().disable()\n        .sessionManagement(\n            httpSecuritySessionManagementConfigurer ->\n                    httpSecuritySessionManagementConfigurer.sessionCreationPolicy(SessionCreationPolicy.STATELESS)\n        )\n        .authorizeRequests(auth -> auth\n            .antMatchers(POST, API_AUTH_TOKEN).permitAll()\n            .antMatchers(GET, PUBLIC_API_LIST).permitAll()\n            .anyRequest().authenticated()\n        );\n    return http.build();\n}\n"})]}),(0,g.jsxs)("section",{children:[(0,g.jsx)(h.aC,{children:"Token Generation"}),(0,g.jsxs)(i.Z,{children:["Submit a POST request to ",(0,g.jsx)("u",{children:"GenerateToken"})," API with Admin user credentials in x-www-form-urlencoded body type like below, we will get the UUID token returned after successful authentication."]}),(0,g.jsx)(l.Z,{src:"/assets/images/spring-security/lesson22-01.png",title:"UUID token generated for Admin user credentials on successful authentication"}),(0,g.jsxs)(i.Z,{children:["Please note that we have removed ",(0,g.jsx)(j.Z,{children:"httpBasic()"})," in ",(0,g.jsx)(j.Z,{children:"HttpSecurity"})," configuration as we are replacing it with token-based authentication. This will cause all the protected APIs to be inaccessible even for the authorized users. And this is because Spring Security can not identify the user at this stage, as we are yet to verify the token and tell Spring Security who the user is and what are they allowed to do."]}),(0,g.jsx)(i.Z,{children:"But before verifying the token we have to associate the token with the user who requested it by storing it in a persistant datastore to verify it on each requests."})]})]})},(0,e.s)(d.Z,"generate-token"))},5927:function(a){a.exports={linkIcon:"ArticleLink_linkIcon__cf7b_",linkText:"ArticleLink_linkText__b7K5H"}},4046:function(a){a.exports={heading:"Heading_heading__aP_DN",underline:"Heading_underline__sSwtx"}},9472:function(a){a.exports={mark:"Mark_mark__8gh_T"}},3394:function(a){a.exports={notes:"Notes_notes__up3CK"}}},function(a){a.O(0,[734,428,637,274,774,888,179],function(){var b;return a(a.s=5307)}),_N_E=a.O()}])