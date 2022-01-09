package Springbootbackend.Security;


import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers("/*");
        web.ignoring().antMatchers("/api/v1/article");
        web.ignoring().antMatchers("/api/v1/article/*");
        web.ignoring().antMatchers("/api/v1/commentaire");
        web.ignoring().antMatchers("/api/v1/commentaire/*");
    }

}
