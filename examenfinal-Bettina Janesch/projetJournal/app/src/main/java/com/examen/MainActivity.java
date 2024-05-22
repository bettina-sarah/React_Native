package com.examen;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.os.Bundle;
import android.widget.EditText;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;

public class MainActivity extends AppCompatActivity {

    EditText champDate, champMessage;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        champDate = findViewById(R.id.champDate);
        champMessage = findViewById(R.id.champMessage);

        getJournalEntry(champDate, champMessage);

    }

    @Override
    protected void onStop() {
        super.onStop();

        try {
            serializeJournal(champDate.getText().toString(),champMessage.getText().toString());
            System.out.println("success save stop");
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

    public void serializeJournal(String date, String text) throws IOException {
        try (FileOutputStream fos = MainActivity.this.openFileOutput("journal.ser", Context.MODE_PRIVATE);
             ObjectOutputStream oos = new ObjectOutputStream(fos)) {
                oos.writeObject(date);
                oos.writeObject(text);
                System.out.println("success save");
        }
    }

    public void getJournalEntry(EditText champDate, EditText champMessage){
        try (FileInputStream fis = MainActivity.this.openFileInput("journal.ser");
             ObjectInputStream ois = new ObjectInputStream(fis))
        {
            String date = (String) ois.readObject();
            String message = (String) ois.readObject();
            champDate.setText(date);
            champMessage.setText(message);
            System.out.println("success get");
        }
        catch (FileNotFoundException | ClassNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace(); // Handle other IO exceptions here.
        }
    }


}