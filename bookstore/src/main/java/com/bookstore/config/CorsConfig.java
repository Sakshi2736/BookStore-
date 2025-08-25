//package com.bookstore.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.cors.CorsConfigurationSource;
//import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
//
//import java.util.List;
//
//
//@Configuration
//public class CorsConfig {
//
//    @Bean
//    public CorsConfigurationSource corsConfigurationSource() {
//        CorsConfiguration config = new CorsConfiguration();
//
//        // your React app origin
//        config.setAllowedOrigins(List.of("http://localhost:5173"));
//
//        // allow the HTTP methods you need
//        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
//
//        // allow any headers (e.g. Authorization)
//        config.setAllowedHeaders(List.of("*"));
//
//        // if you send credentials (cookies or Authorization header)
//        config.setAllowCredentials(true);
//
//        // apply this CORS config to all API paths
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", config);
//
//        return source;
//    }
//}
