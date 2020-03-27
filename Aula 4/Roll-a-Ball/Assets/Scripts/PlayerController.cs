using System.Collections;
using System.Collections.Generic;
using UnityEngine.UI;
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    public float speed; // Variável publica é editável no Unity
    public Text countText;
    public Text winText;
    private Rigidbody rb; // Referência ao component Rigidbody da esfera
    private int count; // Contagem de pontos
    // Start is called before the first frame update
    void Start()
    {
        rb = GetComponent<Rigidbody>();
        count = 0;
        winText.text = "";
    }

    // Update is called once per frame
    void Update()
    {
        float moveHorizontal = Input.GetAxis ("Horizontal");
        float moveVertical = Input.GetAxis ("Vertical");
        
        Vector3 movement = new Vector3 (moveHorizontal, 0.0f, moveVertical);
        setCountText();
        rb.AddForce (movement * speed);
    }
    
    void OnTriggerEnter(Collider other) {
        if (other.gameObject.CompareTag ("Pick Up"))
        {
            other.gameObject.SetActive (false);
            count++;
            if (count >= 12) { winText.text = "You Win!"; }
            setCountText();
        }
    }
    
    void setCountText() {
        countText.text = "Count : " + count.ToString();
    }
}
