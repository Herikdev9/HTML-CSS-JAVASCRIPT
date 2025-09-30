/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package com.mycompany.gerenciabanco;

import java.util.Scanner;
/**
 *
 * @author herik
 */


public class GerenciaBanco {
    @SuppressWarnings("empty-statement")
    public static void main(String[] args){
     
        
 Scanner scanner = new Scanner(System.in);
     
 double saldo;
 double deposito;
 double saque;
     
     System.out.print("digite seu nome:");
     String nome = scanner.next();
     
     System.out.print("digite seu sobrenome:");
     String sobreNome = scanner.next();
     
     System.out.println("digite seu CPF:");
      double cpf = scanner.nextDouble();
      
       System.out.println("digite seu deposito:");
          deposito = scanner.nextDouble();
          
          
 
     saldo = deposito;
     saque = saldo;
   
    
      System.out.print("" + "escolha uma opção \n"+
             "1 - consultar saldo \n"
            + " 2 - fazer deposito");
     String conta = scanner.next();
     if(null == conta){
         System.out.println("saldo negativo");
     }
     else switch (conta) {
            case "1":
                System.out.print("seu saldo é: " + saldo + "\n");
                break;
            case "2":
                System.out.println(" digite seu deposito:");
                deposito = scanner.nextDouble();
                saldo = deposito;
                break;
            default:
                System.out.println("saldo negativo");
                break;
        }
     
     do{
     System.out.print("""
                      escolha uma op\u00e7\u00e3o 
                      1 - fazer outro deposito 
                       2 - sacar o valor disponivel
                       3 - consultar saldo
                       4 - sair.
                      """);
     conta = scanner.next();
     if(null == conta){
          System.out.println("opção nula");
     }else switch(conta){
         case "1" -> {
             System.out.println(" digite seu deposito:");
             deposito = scanner.nextDouble();
             saldo = deposito;
         }
         case "2" -> {
             System.out.print("digite o valor do saque:");
             saque = scanner.nextDouble();
             if(saldo >= saque){
                 saldo -= saque;
                 System.out.println("saque no valor de " + saque + " realizado com sucesso ");
             }else{
                 System.out.println("saldo insuficiente");
             }
          
         }
          case "3" ->{
             System.out.println("seu saldo é: " + saldo + "\n");
          }
         
         case "4" ->{
             System.out.println("obrigado senhor: " + nome +  " por utilizar nosso sistema ");
         break;    
         }
         
         
     }
     }while( saldo > saque);{
    }
    }
}
     
     
    
        
 