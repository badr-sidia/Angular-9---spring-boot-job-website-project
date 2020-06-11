package com.example.demo.entities;

import javax.persistence.*;

@Entity
public class Cv {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
        private String name;
        private String last;
        private String email;
        private String phone;
        private String position;
        private String availablestart;
        private String cvfile;
        private String image;


        @OneToOne(cascade = CascadeType.ALL)
        @JoinColumn(name = "condidat_id", referencedColumnName = "id")
        private Condidat condidat;
    @ManyToOne
    @JoinColumn(name="offre_id")
    private Offre offre;

    public Cv(String name, String last,String cvfile, String email,String phone,String position,String availablestart ,Condidat condidat,Offre offre,String image) {
            this.name = name;
            this.cvfile = cvfile;
            this.image=image;
            this.last = last;
            this.availablestart=availablestart;
            this.email=email;
            this.phone=phone;
            this.position=position;
            this.condidat = condidat;
            this.offre=offre;
        }

        public Cv() {
        }

        public Condidat getCondidat() {
            return condidat;
        }

    public Offre getOffre() {
        return offre;
    }

    public void setOffre(Offre offre) {
        this.offre = offre;
    }

    public String getName() {
            return name;
        }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getLast() {
            return last;
        }

        public String getEmail() {
            return email;
        }

        public String getPhone() {
            return phone;
        }

        public String getPosition() {
            return position;
        }

        public String getAvailablestart() {
            return availablestart;
        }

        public void setCondidat(Condidat condidat) {
            this.condidat = condidat;
        }

        public Long getId() {
            return id;
        }


        public String getCvfile() {
            return cvfile;
        }

        public void setCvfile(String cvfile) {
            this.cvfile = cvfile;
        }

        public void setName(String name) {
            this.name = name;
        }

        public void setLast(String last) {
            this.last = last;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public void setPhone(String phone) {
            this.phone = phone;
        }

        public void setPosition(String position) {
            this.position = position;
        }

        public void setAvailablestart(String availablestart) {
            this.availablestart = availablestart;
        }

        public void setId(Long id) {
            this.id = id;
        }

}
