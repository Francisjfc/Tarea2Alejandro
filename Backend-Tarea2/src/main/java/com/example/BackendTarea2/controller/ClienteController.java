package com.example.BackendTarea2.controller;

import com.example.BackendTarea2.model.Cliente;
import com.example.BackendTarea2.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cliente")
@CrossOrigin
public class ClienteController {
    @Autowired
    private ClienteService clienteService;

    @PostMapping
    public Cliente crearCliente(@RequestBody Cliente cliente){
        return clienteService.guardarCliente(cliente);
    }

    @GetMapping
    public List<Cliente> listaCliente(){
        return clienteService.listaCliente();
    }
}
