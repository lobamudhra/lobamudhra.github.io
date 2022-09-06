(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[778],{8550:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/courses/spring-security/lessons/disable-csrf",function(){return c(8579)}])},476:function(d,b,a){"use strict";var e=a(7568),c=a(4051),f=a.n(c),g=a(5893),h=a(637),i=a(7294),j=a(1896);b.Z=function(a){var l,b=a.fileName,m=a.href,c=a.language,d=void 0===c?"java":c,n=a.children,k=(0,i.useState)(!1),o=k[0],q=k[1],p=(l=(0,e.Z)(f().mark(function a(){return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,navigator.clipboard.writeText(n);case 2:q(!0),setTimeout(function(){return q(!1)},6e3);case 4:case"end":return a.stop()}},a)})),function(){return l.apply(this,arguments)});return(0,g.jsxs)("div",{className:"border rounded fs-6 my-4",children:[b&&(0,g.jsxs)("div",{className:"p-3 bg-light border-bottom",children:[(0,g.jsx)("span",{className:"font-monospace",children:(0,g.jsx)("a",{href:m,target:"_blank",children:b})}),(0,g.jsx)("span",{className:"float-end cursor-pointer","data-bs-toggle":"tooltip","data-bs-title":"Copy code",onClick:p,children:(0,g.jsx)("i",{className:"bi-clipboard"})})]}),(0,g.jsx)("pre",{className:"m-0 px-3 pb-3",children:(0,g.jsx)("code",{className:"language-".concat(d),children:(0,g.jsx)("span",{dangerouslySetInnerHTML:{__html:h.Z.highlight(n,{language:d}).value}})})}),o&&(0,g.jsx)(j.Z,{children:"Code copied to clipboard"})]})}},9963:function(d,b,a){"use strict";a.d(b,{aC:function(){return h},k8:function(){return i},nL:function(){return g}});var e=a(5893),c=a(4046),f=a.n(c);function g(a){var b=a.children;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("h1",{className:"display-5 mt-2 mb-2",children:b}),(0,e.jsx)("p",{className:f().underline})]})}function h(a){var b=a.children;return(0,e.jsx)("h3",{className:"fw-light mt-5 mb-2",children:b})}function i(a){var b=a.children;return(0,e.jsx)("h4",{className:"fw-light mt-5 mb-2",children:b})}},4621:function(c,a,b){"use strict";var d=b(5893);a.Z=function(a){var c=a.src,b=a.title;return(0,d.jsxs)("div",{className:"p-3",children:[(0,d.jsx)("div",{className:"mb-3 text-secondary text-center",children:(0,d.jsx)("em",{children:b})}),(0,d.jsx)("img",{className:"img-fluid rounded border shadow",src:c,alt:b})]})}},7291:function(d,b,a){"use strict";var e=a(5893),c=a(9472),f=a.n(c);b.Z=function(a){var b=a.children;return(0,e.jsx)("mark",{className:"font-monospace border rounded p-1 ".concat(f().mark),children:b})}},8579:function(f,b,a){"use strict";a.r(b);var g=a(5893),h=a(9963),i=a(130),j=a(7291),k=a(476),l=a(4621),c=a(3274),d=a(9927),e=a(358);b.default=(0,c.default)(function(b){var a=b.githubPath;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("section",{children:[(0,g.jsx)(h.nL,{children:"Disable CSRF"}),(0,g.jsxs)(i.Z,{children:["After applying role-based authorization in the last chapter, we can access ",(0,g.jsx)("u",{children:"ListStudents"})," and ",(0,g.jsx)("u",{children:"ListInstructors"})," API only with users having ADMIN role. Similarly we can access ",(0,g.jsx)("u",{children:"CreateCourse"})," API only with users having INSTRUCTOR role. Let's create a new course by sending a POST request to ",(0,g.jsx)("u",{children:"CreateCourse"})," API with Gru who has INSTRUCTOR role."]}),(0,g.jsx)(l.Z,{src:"/assets/images/spring-security/lesson08-01.png",title:"403 Forbidden error returned for Gru (Instructor) while accessing Create Course API"}),(0,g.jsxs)(i.Z,{children:["Surprisingly we have got ",(0,g.jsx)(j.Z,{children:"403 Forbidden"})," error even though Gru has the INSTRUCTOR role. Let's update the ",(0,g.jsx)(j.Z,{children:"application.properties"})," in order to enable the ",(0,g.jsx)(j.Z,{children:"DEBUG"})," log for Spring Security and see what is happening behind the scene."]}),(0,g.jsx)(k.Z,{fileName:"application.properties",href:a+"/src/main/resources/application.properties",children:"\nlogging.level.org.springframework.security=DEBUG    \n"}),(0,g.jsxs)(i.Z,{children:["Restart the application and send the same request again. You can see an error stating ",(0,g.jsx)("strong",{children:(0,g.jsx)("em",{children:'"Invalid CSRF token found for http://localhost:8080/api/v1/courses"'})})," in the log something like below:"]}),(0,g.jsx)(k.Z,{children:"\no.s.security.web.FilterChainProxy        : Securing POST /api/v1/courses\nw.c.HttpSessionSecurityContextRepository : Retrieved SecurityContextImpl [...]\ns.s.w.c.SecurityContextPersistenceFilter : Set SecurityContextHolder to SecurityContextImpl [...]\no.s.security.web.csrf.CsrfFilter         : Invalid CSRF token found for http://localhost:8080/api/v1/courses\no.s.s.w.access.AccessDeniedHandlerImpl   : Responding with 403 status code\ns.s.w.c.SecurityContextPersistenceFilter : Cleared SecurityContextHolder to complete request\no.s.security.web.FilterChainProxy        : Securing POST /error\nw.c.HttpSessionSecurityContextRepository : Retrieved SecurityContextImpl [...]\ns.s.w.c.SecurityContextPersistenceFilter : Set SecurityContextHolder to SecurityContextImpl [...]\no.s.s.w.a.i.FilterSecurityInterceptor    : Authorized filter invocation [POST /error] with attributes [authenticated]\no.s.security.web.FilterChainProxy        : Secured POST /error\ns.s.w.c.SecurityContextPersistenceFilter : Cleared SecurityContextHolder to complete request   \n"})]}),(0,g.jsxs)("section",{children:[(0,g.jsx)(h.aC,{children:"What is CSRF and CSRF Token?"}),(0,g.jsx)(i.Z,{children:"Cross-Site Request Forgery (CSRF) is an attack that forces authenticated users to submit a request to a Web application in which they are currently authenticated."}),(0,g.jsx)(i.Z,{children:"Assume you are browsing through an evil website, while still logged in with your Banks' website. The evil website can force you to click an image, link or button, which then can send an unsolicited fund transfer request to your Bank's website from the evil website. Though the evil website can not see your cookies, the cookies associated with your Bank's website are still sent along with your request. And your Bank's website in no way can differentiate this malicious request, it executes the requested fund transfer."}),(0,g.jsx)(i.Z,{children:"CSRF attacks can be prevented using CSRF token, a secure random token unique per user session known only to the application and it's user interface."})]}),(0,g.jsxs)("section",{children:[(0,g.jsx)(h.aC,{children:"When to use CSRF protection"}),(0,g.jsxs)(i.Z,{children:["CSRF protection is enabled by default in Spring Security for those ",(0,g.jsx)(j.Z,{children:"HttpMethod"})," which potentially can change the state of the application: POST, PUT, DELETE and/or PATCH."]}),(0,g.jsx)(i.Z,{children:"Spring Security recommends to use CSRF protection for any request that could be processed by a browser by normal users. If you are only creating a service that is used by non-browser clients, you will likely want to disable CSRF protection."})]}),(0,g.jsxs)("section",{children:[(0,g.jsx)(h.aC,{children:"Disable CSRF protection"}),(0,g.jsxs)(i.Z,{children:["For the purpose of our course, let's disable CSRF by chaining ",(0,g.jsx)(j.Z,{children:"csrf().disable()"})," method call with ",(0,g.jsx)(j.Z,{children:"HttpSecurity"})," like below:"]}),(0,g.jsx)(k.Z,{fileName:"ApiSecurityConfig.java",href:a+"/src/main/java/com/facadecode/spring/security/config/ApiSecurityConfig.java",children:"\n@Configuration\npublic class ApiSecurityConfig {\n    @Bean\n    public SecurityFilterChain apiFilterChain(HttpSecurity http) throws Exception {\n        http\n            .csrf().disable()\n            .authorizeRequests(auth -> auth\n                .antMatchers(GET, PUBLIC_API_LIST).permitAll()\n                .antMatchers(API_LIST_STUDENTS, API_LIST_INSTRUCTORS).hasRole(ADMIN.name())\n                .antMatchers(POST, API_CREATE_COURSES).hasRole(INSTRUCTOR.name())\n                .anyRequest().authenticated()\n            )\n            .httpBasic();\n        return http.build();\n    }\n}\n"}),(0,g.jsxs)(i.Z,{children:["If we send the ",(0,g.jsx)("u",{children:"CreateCourse"})," API request again with Gru after restarting the application, we can see the course got created with ",(0,g.jsx)("em",{children:"201 Created"})," status. Whereas it throws ",(0,g.jsx)(j.Z,{children:"403 Forbidden"})," error for the users who does not have the INSTRUCTOR role."]}),(0,g.jsx)(l.Z,{src:"/assets/images/spring-security/lesson08-02.png",title:"New course created for Gru after disabling CSRF"})]})]})},(0,e.s)(d.Z,"disable-csrf"))},4046:function(a){a.exports={heading:"Heading_heading__aP_DN",underline:"Heading_underline__sSwtx"}},9472:function(a){a.exports={mark:"Mark_mark__8gh_T"}}},function(a){a.O(0,[734,428,637,274,774,888,179],function(){var b;return a(a.s=8550)}),_N_E=a.O()}])