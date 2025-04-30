import { Router } from "express";
import bodyParser from "body-parser";
import { db } from "../db.js";

const router = Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post("/tasks", async (req, res) => {
  //create new task

  try {
    const { title, description, status, user_id } = req.body;
    await db.query(
      "INSERT INTO task (title, description, status, user_id) VALUES ($1,$2,$3,$4)",
      [title, description, status, user_id]
    );

    res.send("task created");
  } catch (err) {
    console.log(err.message);
    res.status(500).send("error adding task");
  }
});

router.get("/tasks", async (req, res) => {
  // List all tasks
  try {
    const { user_id } = req.body;
    const result = await db.query("SELECT * FROM task WHERE user_id = ($1)", [
      user_id,
    ]);
    res.send(result.rows);
  } catch (err) {
    res.status(500).send("error loading tasks");
  }
});

router.put("/tasks/:id", async (req, res) => {
  try {
    
    const id = req.params.id;
    const { title, description, status} = req.body;
    await db.query("UPDATE task SET title = $1 , description = $2 ,status = $3  where id = $4", 
        [title, description, status,id]);
    res.send("task updated");
  } catch (err) {
    console.log(err.message);
    res.status(500).send("error updating task");
  }
});

router.delete("/tasks/:id", async (req, res) => {
  try {

    const id = req.params.id;
    await db.query("DELETE FROM task where id = $1", [id]);
    res.send("task deleted");
  } catch (err) {
    console.log(err.message);
    res.status(500).send("error deleting task");
  }
});

export default router;
