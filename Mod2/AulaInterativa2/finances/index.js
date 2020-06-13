import express from "express";
import {promises}  from "fs";
import lancamentosRouter from "./routes/lancamentos.js";
import { promises } from "dns";

const app = express();
app.use(express.json());
app.use("/lancamentos", lancamentoRouter);

app.listen(3000, async () => {
    
    try {
        const initialJson={
            nextId:1,
            lancamentos:[]
        };
    
        await writeFile("lancamentos.json", JSON.stringify(initialJson), {flag:"wx"});        
        
    } catch (error) {
        
    }
    
    console.log("API Started");

});
